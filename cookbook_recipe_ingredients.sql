-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: cookbook
-- ------------------------------------------------------
-- Server version	9.2.0

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
-- Table structure for table `recipe_ingredients`
--

DROP TABLE IF EXISTS `recipe_ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe_ingredients` (
  `recipe_id` int NOT NULL,
  `ingredient_id` int NOT NULL,
  PRIMARY KEY (`recipe_id`,`ingredient_id`),
  KEY `ingredient_id` (`ingredient_id`),
  CONSTRAINT `recipe_ingredients_ibfk_1` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`),
  CONSTRAINT `recipe_ingredients_ibfk_2` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_ingredients`
--

LOCK TABLES `recipe_ingredients` WRITE;
/*!40000 ALTER TABLE `recipe_ingredients` DISABLE KEYS */;
INSERT INTO `recipe_ingredients` VALUES (1,1),(7,1),(12,1),(24,1),(2,2),(14,2),(15,2),(3,3),(16,3),(8,4),(19,4),(6,5),(25,5),(9,6),(11,6),(21,6),(28,6),(20,7),(13,9),(20,9),(21,9),(25,9),(27,9),(30,11),(22,12),(17,13),(1,16),(2,16),(6,16),(7,16),(9,16),(14,16),(15,16),(18,16),(20,16),(21,16),(23,16),(27,16),(28,16),(29,16),(1,17),(2,17),(3,17),(5,17),(6,17),(8,17),(15,17),(17,17),(18,17),(19,17),(20,17),(23,17),(24,17),(27,17),(28,17),(29,17),(11,18),(16,18),(18,18),(21,18),(1,19),(2,19),(4,19),(6,19),(9,19),(23,19),(1,20),(4,20),(6,20),(10,20),(16,20),(18,20),(4,21),(10,21),(27,21),(2,22),(7,22),(12,22),(15,22),(22,22),(5,23),(14,23),(29,23),(10,25),(18,25),(21,28),(25,28),(30,29),(7,30),(11,30),(12,31),(22,31),(26,35),(19,36),(23,36),(27,36),(13,37),(5,38),(14,38),(19,38),(24,38),(30,38),(5,39),(8,39),(12,39),(13,39),(14,39),(19,39),(24,39),(29,39),(30,39),(5,40),(20,40),(24,40),(26,40),(29,40),(1,41),(6,41),(9,41),(16,41),(18,41),(21,41),(29,41),(30,41),(5,42),(8,42),(14,42),(24,42),(4,43),(23,43),(26,43),(12,44),(20,44),(26,44),(10,45),(2,47),(22,47),(25,50),(1,51),(2,51),(3,51),(4,51),(5,51),(7,51),(8,51),(9,51),(10,51),(11,51),(12,51),(13,51),(14,51),(15,51),(16,51),(17,51),(18,51),(19,51),(20,51),(22,51),(23,51),(24,51),(26,51),(27,51),(28,51),(29,51),(30,51),(1,52),(2,52),(3,52),(4,52),(5,52),(7,52),(8,52),(9,52),(10,52),(11,52),(12,52),(14,52),(15,52),(16,52),(17,52),(18,52),(19,52),(20,52),(22,52),(23,52),(24,52),(26,52),(27,52),(28,52),(29,52),(30,52),(12,53),(30,53),(15,54),(2,56),(15,56),(22,56),(28,56),(17,57),(26,57),(13,59),(18,62),(8,63),(15,63),(16,65),(1,66),(4,66),(7,66),(10,66),(17,66),(27,66),(1,67),(3,67),(6,67),(9,67),(11,67),(16,67),(21,67),(25,67),(4,68),(7,68),(8,68),(10,68),(17,68),(3,69),(9,69),(28,69),(20,70),(23,70),(26,70),(11,71),(28,71),(28,72),(14,74),(29,74),(12,75),(6,76),(16,76),(21,76),(25,76),(2,77),(22,77),(25,77),(18,78),(15,79),(19,79),(29,79),(30,79),(11,81),(11,82),(16,82),(17,82),(22,82),(25,82),(11,83),(11,84),(11,85),(12,85),(11,86),(13,87),(13,88),(13,89),(14,90),(15,91),(15,92),(15,93),(19,93),(21,93);
/*!40000 ALTER TABLE `recipe_ingredients` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-26 23:52:59
