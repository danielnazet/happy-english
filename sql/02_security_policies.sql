-- Włączamy RLS dla wszystkich tabel
alter table profiles enable row level security;
alter table students enable row level security;
alter table lessons enable row level security;
alter table homework enable row level security;
alter table grades enable row level security;
alter table absences enable row level security;

-- Polityki dla profiles
create policy "Użytkownicy mogą widzieć swoje profile"
  on profiles for select
  using (auth.uid() = id);

create policy "Użytkownicy mogą aktualizować swoje profile"
  on profiles for update
  using (auth.uid() = id);

-- Polityki dla students
create policy "Rodzice mogą widzieć swoich uczniów"
  on students for select
  using (parent_id = auth.uid());

create policy "Nauczyciele mogą widzieć wszystkich uczniów"
  on students for select
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
      and profiles.role = 'teacher'
    )
  );

-- Polityki dla lessons
create policy "Nauczyciele mogą widzieć swoje lekcje"
  on lessons for select
  using (teacher_id = auth.uid());

create policy "Rodzice mogą widzieć lekcje swoich dzieci"
  on lessons for select
  using (
    exists (
      select 1 from students
      where students.id = lessons.student_id
      and students.parent_id = auth.uid()
    )
  );

-- Polityki dla homework
create policy "Nauczyciele mogą widzieć i zarządzać zadaniami"
  on homework for all
  using (teacher_id = auth.uid());

create policy "Rodzice mogą widzieć zadania swoich dzieci"
  on homework for select
  using (
    exists (
      select 1 from students
      where students.id = homework.student_id
      and students.parent_id = auth.uid()
    )
  );

-- Polityki dla grades
create policy "Nauczyciele mogą widzieć i zarządzać ocenami"
  on grades for all
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
      and profiles.role = 'teacher'
    )
  );

create policy "Rodzice mogą widzieć oceny swoich dzieci"
  on grades for select
  using (
    exists (
      select 1 from students
      where students.id = grades.student_id
      and students.parent_id = auth.uid()
    )
  );

-- Polityki dla absences
create policy "Rodzice mogą zgłaszać nieobecności"
  on absences for insert
  with check (
    exists (
      select 1 from students
      where students.id = absences.student_id
      and students.parent_id = auth.uid()
    )
  );

create policy "Rodzice mogą widzieć nieobecności swoich dzieci"
  on absences for select
  using (
    exists (
      select 1 from students
      where students.id = absences.student_id
      and students.parent_id = auth.uid()
    )
  );

create policy "Nauczyciele mogą widzieć wszystkie nieobecności"
  on absences for select
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
      and profiles.role = 'teacher'
    )
  ); 