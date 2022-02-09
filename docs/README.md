# Strapi duplicate key error solution after manual migration

this script should resolve the off-sync sequence in postgres db

```sql
DO $$
DECLARE
	i TEXT;
BEGIN
	FOR i IN(
		SELECT
			tbls.table_name FROM information_schema.tables AS tbls
			INNER JOIN information_schema.columns AS cols ON tbls.table_name = cols.table_name
		WHERE
			-- Change the table_catalog to your database name
			tbls.table_catalog = '[change to the db name]'
			AND tbls.table_schema = 'public'
			AND cols.column_name = 'id')
	LOOP
		EXECUTE 'Select setval(''' || i || '_id_seq'', (SELECT MAX(id) as a FROM ' || i || '));';
	END LOOP;
	END$$;
```

after running this script it will reset the sequence based on the highest id value in the collection type. e.q if the last highest id in `pages` is `12` then the next entry will be `13`
