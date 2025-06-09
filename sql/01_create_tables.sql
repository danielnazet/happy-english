-- Tabela profili użytkowników
create table profiles (
  id uuid references auth.users on delete cascade,
  role text check (role in ('teacher', 'parent')) not null,
  name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (id)
);

-- Tabela uczniów
create table students (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  class text not null,
  level text not null,
  parent_id uuid references profiles(id) on delete cascade
);

-- Tabela lekcji
create table lessons (
  id uuid default uuid_generate_v4() primary key,
  teacher_id uuid references profiles(id) on delete cascade,
  student_id uuid references students(id) on delete cascade,
  subject text not null,
  date timestamp with time zone not null,
  time text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabela zadań domowych
create table homework (
  id uuid default uuid_generate_v4() primary key,
  teacher_id uuid references profiles(id) on delete cascade,
  student_id uuid references students(id) on delete cascade,
  title text not null,
  description text,
  due_date timestamp with time zone not null,
  status text check (status in ('pending', 'in_progress', 'completed')) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabela ocen
create table grades (
  id uuid default uuid_generate_v4() primary key,
  student_id uuid references students(id) on delete cascade,
  subject text not null,
  grade text not null,
  date timestamp with time zone not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabela nieobecności
create table absences (
  id uuid default uuid_generate_v4() primary key,
  student_id uuid references students(id) on delete cascade,
  date timestamp with time zone not null,
  reason text not null,
  status text check (status in ('pending', 'approved', 'rejected')) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
); 