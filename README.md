# DonáClick

En este documento se detallan a grandes rasgos los esquemas de datos que debería tener el backend. Deberá contar con 4 roles de usuario:

- **User**: Usuario regular, comprador.
- **Seller**: Usuario vendedor, con capacidad para publicar y manejar sus productos, manejar órdenes y ver sus métricas.
- **ONG**: Usuario para la ONG, con capacidad para visualizar sus métricas.
- **Admin**: Deberá contar con permisos de todas los anteriores.

## User

- **ID** (string)
- **Nombre** (string)
- **Apellido** (string)
- **Email** (string)
- **Ong seleccionada por defecto** (object)
- **Compras** (array)\*

## Seller

- **ID** (string)
- **Nombre** (string)
- **Apellido** (string)
- **Email** (string)
- **Nombre de fantasía** (string)
- **Productos** (array)\*
- **Puntuación** (number)
- **Métricas** (array)\*
- **Órdenes** (array)\*

## ONG

- ID (string)
- **Nombre** (string)
- **Apellido** (string)
- **Email** (string)
- **Nombre de fantasía** (string)
- **Métricas** (array)\*

## ADMIN

Deberá tener capacidad para editar todo lo anteriormente mencionado.

### Aclaraciones

Los items marcados con asterisco (\*) también serán esquemas de datos.

- **Compras** (user)
- **Productos** (seller)
- **Órdenes** (seller)
- **Métricas** (seller, ong, admin)

## Otras integraciones necesarias

- **Pasarela de pago** (MercadoPago)
- **OCA**
