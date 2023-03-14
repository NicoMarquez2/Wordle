# Wordle clone app (BackEnd)

This project was made with Node.JS, Express and PostresSQL

## Config data base

-Install postresSQL

-Create a data base named "wordle"

-Create a table named "users" whith four columns:

    -id (primary key and auto incremental) || Data type: bigint

    -name || Data type: character varying

    -email || Data type: character varying

    -password || Data type: character varying

-Create a table named "user_stats" whith five columns:

    -id (primary key and auto incremental) || Data type: bigint

    -user_id (foreign key to the column "id" from the table "users") || bigint

    -points || Data type: bigint

    -strak ||  Data type: boolean

    -streak_points || Data type: integer


-Create a table named "words" whith two columns:

    -id (primary key and auto incremental) || Data type: bigint

    -word || Data type: character varying


-Run this SQL script to fill the "words" table:

INSERT INTO public.words(word)
	VALUES ('tacon'), ('canoa'), ('gorro'), ('avion'), ('aureo'), ('flora'), ('cargo'), ('abrir'),
	('botas'), ('deber'), ('dolar'), ('galgo'), ('japon'), ('lento'), ('aboya'), ('abran'),
	('actas'), ('actos'), ('acuna'), ('acuso'), ('agudo'), ('Aldea'), ('altar'), ('animo'),
	('apodo'), ('arnes'), ('bajos'), ('balas'), ('barra'), ('basta'), ('bayas'), ('baños'),
	('bizco'), ('botas'), ('bramo'), ('busco'), ('cabra'), ('campo'), ('canas'), ('cansa'), 
	('capto'), ('carga'), ('caros'), ('cazar'), ('cejas'), ('cerdo'), ('cerro'), ('chile'), 
	('china'), ('ciega'), ('clamo'), ('colon'), ('comer'), ('coral'), ('corea'), ('costo'),
	('creer'), ('cubos'), ('culta'), ('copos'), ('dados'), ('danza'), ('denso'), ('dijes'),
	('dario'), ('dolor'), ('datos'), ('donas'), ('domar'), ('dotes'), ('dubai'), ('duros'),
	('falla'), ('falta'), ('flaca'), ('finca'), ('folio'), ('forma'), ('fotos'), ('fosos'),
	('frito'), ('fugaz'), ('fusil'), ('gafas'), ('genes'), ('ganso'), ('girar'), ('gales'),
	('gordo'), ('gorra'), ('grave'), ('grita'), ('groar'), ('hadas'), ('hacha'), ('habla'),
	('haiti'), ('hinca'), ('hitos'), ('hojas'), ('ideas'), ('india'), ('islas'), ('ivana'),
	('jerga'), ('jesus'), ('jalon'), ('joyas'), ('jugos'), ('julio'), ('kenia'), ('lacra'),
	('ladro'), ('labia'), ('lados'), ('larga'), ('latas'), ('lazos'), ('leyes'), ('latas'),
	('libia'), ('lazos'), ('leves'), ('libro'), ('locos'), ('luces'), ('mecer'), ('males'),
	('madre'), ('manco'), ('mango'), ('manos'), ('mapas'), ('masco'), ('matar'), ('media'),
	('menta'), ('mermo'), ('mesas'), ('miles'), ('mirar'), ('mitos'), ('mojar'), ('monos'),
	('morro'), ('mugre'), ('multa'), ('nacer'), ('necia'), ('nepal'), ('netos'), ('niños'),
	('notas'), ('nubes'), ('nudos'), ('obras'), ('odiar'), ('ogros'), ('opera'), ('optar'),
	('orbes'), ('orcas'), ('orden'), ('ovulo'), ('pacto'), ('palas'), ('panes'), ('parda'),
	('pares'), ('pared'), ('paris'), ('pasea'), ('patas'), ('pañal'), ('pecas'), ('pegar'),
	('penas'), ('perdi'), ('pesas'), ('picas'), ('plena'), ('poner'), ('poros'), ('prado'), 
	('polen'), ('quema'), ('quito'), ('rabia'), ('ratas'), ('tanas'), ('rasca'), ('razas'),
	('reino'), ('retos'), ('rifas'), ('rimel'), ('rompe'), ('rusia'), ('sabio'), ('sacos'),
	('salgo'), ('salta'), ('salud'), ('selva'), ('sedas'), ('serio'), ('setas'), ('siria'),
	('sogas'), ('solos'), ('somos'), ('soplo'), ('soñar'), ('sudan'), ('suele'), ('suena'),
	('sushi'), ('tabus'), ('talar'), ('tarde'), ('tejas'), ('temas'), ('temer'), ('tengo'),
	('tenso'), ('terca'), ('tesla'), ('todos'), ('tomas'), ('tonos'), ('tonto'), ('traer'),
	('urnas'), ('vacas'), ('vales'), ('vamos'), ('velas'), ('velos'), ('vende'), ('volar'),
	('votar'), ('yemas'), ('yogur'), ('zurda'), ('zorro'); 

-Config .env file

## Run the project

### `npm install`

For install all the dependencies

### `node ./app.js`

Run the project