# DeliveryOrdersReactProject
## Краткое описание действий, необходимых для запуска проекта.
1. Скачать API (https://github.com/vuzledve/DeliveryOrdersAPI) и открыть DeliveryOrdersAPI.sln с помощью Visual Studio.
2. В файле appsettings.json в строке №10 заменить строку подключения к БД на свою.
3. Создать БД на основе имеющейся в проекте миграции. Для этого нужно в консоли диспетчера пакетов (Средства > Диспетчер пакетов NuGet > Консоль диспетчера пакетов) написать следующее:
```
update-database
```
4. запустить проект с API
5. Скачать delivery-orders-client, открыть cmd-консоль из папки проекта и написать следующие команды:
```
npm install react-scripts
npm start
```
> Для запуска проекта необходим .NET версии не ниже 6.0 и Node.js
