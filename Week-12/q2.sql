/** 1 **/
SELECT * FROM items where weight = (select min(weight) from items);
/** 2 **/
select w.* from warehouses w join cities c on c.id=w.city where c.city="Tirupati";
/** 3 **/
select i.* from items i 
JOIN items_orders oi on oi.items = i.id
JOIN customer_orders co on co.oid = oi.orders
JOIN customer cus on cus.id = co.cid
where cus.cname="Hari";
/** 4 **/
select * from warehouses where id = (SELECT wid FROM wharehouse.stores group by wid having count(*) >= (select max(cmax.i) from (select count(*) as i  from stores group by wid) as cmax ));
/** 5 **/
select itm.* from items itm 
JOIN (select * from items_orders where id IN (SELECT id FROM items_orders group by items having count(*) <= (select min(cmax.i) from (select count(*) as i  from items_orders group by items) as cmax ))) as gp
on gp.items = itm.id;
/** 6 **/
SELECT c.cname,o.oid,o.date,itm.description FROM warehouse.customer c JOIN customer_orders co
on co.cid = c.id JOIN orders o on o.id = co.oid JOIN items_orders oi on oi.orders = o.id
JOIN items itm on itm.id = oi.items
;