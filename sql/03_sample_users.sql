-- Dodajemy profil nauczyciela
insert into profiles (id, role, name)
select id, 'teacher', 'Jan Kowalski'
from auth.users
where email = 'teacher@test.com';

-- Dodajemy profil rodzica
insert into profiles (id, role, name)
select id, 'parent', 'Anna Nowak'
from auth.users
where email = 'parent@test.com';

-- Dodajemy ucznia dla rodzica
do $$
declare
  parent_id uuid;
begin
  select id into parent_id from auth.users where email = 'parent@test.com';
  
  insert into students (name, class, level, parent_id)
  values ('Piotr Nowak', '3A', 'B1', parent_id);
end $$; 