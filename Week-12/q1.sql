-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: wharehouse
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Hyderabad','Telengana'),(2,'Tirupati','Andhra Pradesh'),(3,'Chennai','Tamil Nadu'),(4,'Trivandram','Kerela'),(5,'Bengaluru','Karnataka'),(6,'Bophal','Madhyapradesh'),(7,'mumbai','Maharastra');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cid` int NOT NULL,
  `cname` varchar(45) DEFAULT NULL,
  `address` varchar(245) DEFAULT NULL,
  `city` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cid_UNIQUE` (`cid`),
  KEY `cc_idx` (`city`),
  CONSTRAINT `cc` FOREIGN KEY (`city`) REFERENCES `cities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,101,'Hari','Trieupati',2),(2,102,'Jitesh','Mumbai',7),(3,103,'Pramod','Bengaluru',5);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_orders`
--

DROP TABLE IF EXISTS `customer_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_orders` (
  `id` int NOT NULL,
  `cid` int DEFAULT NULL,
  `oid` int DEFAULT NULL,
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `orc_idx` (`oid`),
  KEY `cor_idx` (`cid`),
  CONSTRAINT `cor` FOREIGN KEY (`cid`) REFERENCES `customer` (`id`),
  CONSTRAINT `orc` FOREIGN KEY (`oid`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_orders`
--

LOCK TABLES `customer_orders` WRITE;
/*!40000 ALTER TABLE `customer_orders` DISABLE KEYS */;
INSERT INTO `customer_orders` VALUES (1,1,1),(2,2,1),(3,3,2),(4,1,3);
/*!40000 ALTER TABLE `customer_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_store`
--

DROP TABLE IF EXISTS `item_store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_store` (
  `item` int NOT NULL,
  `store` int NOT NULL,
  PRIMARY KEY (`item`,`store`),
  KEY `store_idx` (`store`),
  CONSTRAINT `itm` FOREIGN KEY (`item`) REFERENCES `items` (`id`),
  CONSTRAINT `store` FOREIGN KEY (`store`) REFERENCES `stores` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_store`
--

LOCK TABLES `item_store` WRITE;
/*!40000 ALTER TABLE `item_store` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `itemno` int NOT NULL,
  `description` varchar(245) DEFAULT NULL,
  `weight` decimal(5,2) DEFAULT NULL,
  `cost` decimal(5,2) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `itemno_UNIQUE` (`itemno`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,101,'Galaxy M',23.00,200.00,'Mobile'),(2,102,'Galaxy A',17.00,150.00,'Mobile'),(3,103,'Galaxy S',24.00,300.00,'Mobile'),(4,104,'Washing Machine',234.00,500.00,'Home Appliance'),(5,105,'Oven',150.00,300.00,'Home Appliance');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items_orders`
--

DROP TABLE IF EXISTS `items_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items_orders` (
  `id` int NOT NULL,
  `items` int DEFAULT NULL,
  `orders` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `itms_idx` (`items`),
  KEY `ords_idx` (`orders`),
  CONSTRAINT `itms` FOREIGN KEY (`items`) REFERENCES `items` (`id`),
  CONSTRAINT `ords` FOREIGN KEY (`orders`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items_orders`
--

LOCK TABLES `items_orders` WRITE;
/*!40000 ALTER TABLE `items_orders` DISABLE KEYS */;
INSERT INTO `items_orders` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,1),(5,5,3);
/*!40000 ALTER TABLE `items_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL,
  `oid` varchar(45) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'203212','2022-12-30 12:22:33'),(2,'432432','2022-12-20 00:22:33'),(3,'423424','2022-12-25 12:22:33');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stores`
--

DROP TABLE IF EXISTS `stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `SID` int NOT NULL,
  `store_name` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `wid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `SID_UNIQUE` (`SID`),
  KEY `wid` (`wid`),
  CONSTRAINT `stores_ibfk_1` FOREIGN KEY (`wid`) REFERENCES `warehouses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stores`
--

LOCK TABLES `stores` WRITE;
/*!40000 ALTER TABLE `stores` DISABLE KEYS */;
INSERT INTO `stores` VALUES (1,101,'Store 1','Tirupati',1),(2,102,'Store 2','Hyderabad',2),(3,103,'Store 3','Chennai',3),(4,104,'Store 4','Trivandram',4),(5,105,'Store 5','Bengaluru',5),(6,106,'Store 6','Bhopal',6),(7,107,'Store 7','Mumbai',7);
/*!40000 ALTER TABLE `stores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warehouses`
--

DROP TABLE IF EXISTS `warehouses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warehouses` (
  `id` int NOT NULL,
  `wid` int NOT NULL,
  `wname` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `description` json DEFAULT NULL,
  `city` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `wid_UNIQUE` (`wid`),
  KEY `warehouseToCity_idx` (`city`),
  CONSTRAINT `warehouseToCity` FOREIGN KEY (`city`) REFERENCES `cities` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warehouses`
--

LOCK TABLES `warehouses` WRITE;
/*!40000 ALTER TABLE `warehouses` DISABLE KEYS */;
INSERT INTO `warehouses` VALUES (1,101,'Warehouse 1','Tirupati','\"{\'Tirupati\':\'\'}\"',2),(2,102,'W2','Hyderabad','\"{\'Tirupati\':\'\'}\"',2),(3,103,'W3','Chennai','\"{\'Tirupati\':\'\'}\"',3),(4,104,'W4','Trivandram','\"{\'Tirupati\':\'\'}\"',4),(5,105,'W5','Bengaluru','\"{\'Tirupati\':\'\'}\"',5),(6,106,'W6','Bhopal','\"{\'Tirupati\':\'\'}\"',6),(7,107,'W7','Mumbai','\"{\'Tirupati\':\'\'}\"',7);
/*!40000 ALTER TABLE `warehouses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-30 15:48:38
