/*select count(p.id) as Cantidad, f.format as Formato
From products p inner join formats f on p.id_format = f.id
group by f.format
order by Cantidad desc;*/

/*select count(o.id) as 'Cantidad Pedidos', CONCAT(c.name,' ',c.last_name), max(o.total) from orders o 
inner join clients c on o.id_client = c.id
group by CONCAT(c.name,' ',c.last_name);*/

/*SELECT SUM(od.cant) AS 'Cantidad Total',p.title, sum(od.cant*od.is_buy) as Ventas, sum(od.cant*(1-od.is_buy)) as Alquiler
FROM order_details od INNER JOIN products p ON od.id_product = p.id
GROUP BY p.title
ORDER BY 'Cantidad Total' DESC;*/

/*SELECT TOP 5 SUM(od.cant) AS 'Cantidad Total', g.gender from order_details od
inner join products p on od.id_product = p.id
inner join genders g on p.id_gender = g.id
group by g.gender
order by SUM(od.cant) DESC;*/

/*select e.name, e.last_name,e.legajo, o.date from employees e
inner join orders o on e.id = o.id_employee
where o.date between '2024-01-12' and '2024-01-15'
order by o.date desc, e.legajo;*/

/*select count(o.id_payment_method) as 'Cantidad pagos', p.payment_method as 'Medio de pago', c.is_partner as 'Es Socio' from orders o
inner join payment_methods p on o.id_payment_method = p.id
inner join clients c on c.id = o.id_client
group by p.payment_method, c.is_partner
having count(o.id_payment_method)>1 and c.is_partner = 1;*/