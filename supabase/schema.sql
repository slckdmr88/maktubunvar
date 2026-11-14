-- Mektubun Var: temel tablolar
create table if not exists settings (key text primary key, value jsonb not null);
insert into settings (key, value) values
  ('prices', '{"base":200,"paper":10,"envelope":10,"background":25,"photo":20,"postcard":20,"kdv":20}'),
  ('scents', '[["Kokusuz",0],["Lavanta",15],["Gül",15],["Vanilya",15],["Odunsu",20],["Misk",20]]')
on conflict (key) do nothing;

create table if not exists postcards (
  id bigserial primary key, name text not null, price numeric not null default 20,
  image_path text, active boolean not null default true
);

create table if not exists orders (
  id text primary key,
  created_at timestamptz not null default now(),
  user_phone text not null,
  sender_name text, sender_address text,
  recipient_name text, prison text, ward text,
  letter_text text, font text, paper text, envelope text, scent text,
  background_path text, photo_paths text[] default '{}', postcards jsonb default '[]',
  net_total numeric, total numeric,
  status text not null default 'Yeni', tracking_no text
);

-- Tüm erişim sunucu üzerinden yapılır; dışarıdan doğrudan erişim kapalı.
alter table settings enable row level security;
alter table postcards enable row level security;
alter table orders enable row level security;
