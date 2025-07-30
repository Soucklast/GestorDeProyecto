CREATE DATABASE  IF NOT EXISTS `projectmanager` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `projectmanager`;
-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: projectmanager
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `asignaciones`
--

DROP TABLE IF EXISTS `asignaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asignaciones` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tareas_id` bigint(20) unsigned NOT NULL,
  `usuarios_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `asignaciones_tareas_id_usuarios_id_unique` (`tareas_id`,`usuarios_id`),
  KEY `asignaciones_usuarios_id_foreign` (`usuarios_id`),
  CONSTRAINT `asignaciones_tareas_id_foreign` FOREIGN KEY (`tareas_id`) REFERENCES `tareas` (`id`) ON DELETE CASCADE,
  CONSTRAINT `asignaciones_usuarios_id_foreign` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asignaciones`
--

LOCK TABLES `asignaciones` WRITE;
/*!40000 ALTER TABLE `asignaciones` DISABLE KEYS */;
INSERT INTO `asignaciones` VALUES (1,11,11,'2025-07-30 07:36:39','2025-07-30 07:36:39'),(2,12,12,'2025-07-30 07:36:39','2025-07-30 07:36:39'),(3,13,13,'2025-07-30 07:36:39','2025-07-30 07:36:39'),(4,14,14,'2025-07-30 07:36:39','2025-07-30 07:36:39'),(5,15,15,'2025-07-30 07:36:39','2025-07-30 07:36:39'),(6,16,16,'2025-07-30 07:36:39','2025-07-30 07:36:39'),(7,17,17,'2025-07-30 07:36:39','2025-07-30 07:36:39'),(8,18,18,'2025-07-30 07:36:39','2025-07-30 07:36:39'),(9,19,19,'2025-07-30 07:36:39','2025-07-30 07:36:39'),(10,20,20,'2025-07-30 07:36:39','2025-07-30 07:36:39');
/*!40000 ALTER TABLE `asignaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipo_usuarios`
--

DROP TABLE IF EXISTS `equipo_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipo_usuarios` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `usuario_id` bigint(20) unsigned NOT NULL,
  `equipo_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `rol` enum('admin','cliente') NOT NULL DEFAULT 'cliente',
  PRIMARY KEY (`id`),
  UNIQUE KEY `equipo_usuarios_usuario_id_equipo_id_unique` (`usuario_id`,`equipo_id`),
  KEY `equipo_usuarios_equipo_id_foreign` (`equipo_id`),
  CONSTRAINT `equipo_usuarios_equipo_id_foreign` FOREIGN KEY (`equipo_id`) REFERENCES `equipos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `equipo_usuarios_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipo_usuarios`
--

LOCK TABLES `equipo_usuarios` WRITE;
/*!40000 ALTER TABLE `equipo_usuarios` DISABLE KEYS */;
INSERT INTO `equipo_usuarios` VALUES (1,21,62,'2025-07-30 07:36:45','2025-07-30 07:36:45','cliente'),(2,22,64,'2025-07-30 07:36:45','2025-07-30 07:36:45','admin'),(3,23,66,'2025-07-30 07:36:45','2025-07-30 07:36:45','admin'),(4,24,68,'2025-07-30 07:36:45','2025-07-30 07:36:45','cliente'),(5,25,70,'2025-07-30 07:36:45','2025-07-30 07:36:45','cliente'),(6,26,72,'2025-07-30 07:36:45','2025-07-30 07:36:45','cliente'),(7,27,74,'2025-07-30 07:36:45','2025-07-30 07:36:45','admin'),(8,28,76,'2025-07-30 07:36:45','2025-07-30 07:36:45','admin'),(9,29,78,'2025-07-30 07:36:45','2025-07-30 07:36:45','admin'),(10,30,80,'2025-07-30 07:36:45','2025-07-30 07:36:45','admin'),(11,1,61,'2025-07-30 08:48:48','2025-07-30 08:48:48','admin'),(13,1,11,'2025-07-30 09:40:42','2025-07-30 09:48:07','cliente');
/*!40000 ALTER TABLE `equipo_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipos`
--

DROP TABLE IF EXISTS `equipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipos`
--

LOCK TABLES `equipos` WRITE;
/*!40000 ALTER TABLE `equipos` DISABLE KEYS */;
INSERT INTO `equipos` VALUES (1,'osos mawwdureeos','2025-07-30 07:36:25','2025-07-30 09:34:13'),(2,'O\'Reilly, Steuber and Murray','2025-07-30 07:36:25','2025-07-30 07:36:25'),(3,'Hammes-Konopelski','2025-07-30 07:36:26','2025-07-30 07:36:26'),(4,'Ullrich-Hartmann','2025-07-30 07:36:26','2025-07-30 07:36:26'),(5,'Kling, Gutmann and Thompson','2025-07-30 07:36:26','2025-07-30 07:36:26'),(6,'Smith, Dicki and Herman','2025-07-30 07:36:26','2025-07-30 07:36:26'),(7,'Paucek, Bogan and Wilkinson','2025-07-30 07:36:26','2025-07-30 07:36:26'),(8,'Sawayn and Sons','2025-07-30 07:36:26','2025-07-30 07:36:26'),(9,'Mueller-Stiedemann','2025-07-30 07:36:26','2025-07-30 07:36:26'),(10,'Herzog-Tromp','2025-07-30 07:36:26','2025-07-30 07:36:26'),(11,'Zemlak Group','2025-07-30 07:36:26','2025-07-30 07:36:26'),(12,'Johnson PLC','2025-07-30 07:36:26','2025-07-30 07:36:26'),(13,'Maggio and Sons','2025-07-30 07:36:26','2025-07-30 07:36:26'),(14,'Schimmel-Kuhn','2025-07-30 07:36:26','2025-07-30 07:36:26'),(15,'Cormier LLC','2025-07-30 07:36:26','2025-07-30 07:36:26'),(16,'McCullough PLC','2025-07-30 07:36:26','2025-07-30 07:36:26'),(17,'White-Langosh','2025-07-30 07:36:26','2025-07-30 07:36:26'),(18,'Schiller, Auer and Schaefer','2025-07-30 07:36:26','2025-07-30 07:36:26'),(19,'Turner, Fadel and Rogahn','2025-07-30 07:36:26','2025-07-30 07:36:26'),(20,'O\'Reilly-Haley','2025-07-30 07:36:26','2025-07-30 07:36:26'),(21,'Glover-Haag','2025-07-30 07:36:26','2025-07-30 07:36:26'),(22,'Ratke Group','2025-07-30 07:36:26','2025-07-30 07:36:26'),(23,'Dibbert-DuBuque','2025-07-30 07:36:26','2025-07-30 07:36:26'),(24,'Beatty Inc','2025-07-30 07:36:26','2025-07-30 07:36:26'),(25,'Trantow, Runolfsson and Considine','2025-07-30 07:36:26','2025-07-30 07:36:26'),(26,'Schneider, Bernhard and Turner','2025-07-30 07:36:26','2025-07-30 07:36:26'),(27,'Kilback-Christiansen','2025-07-30 07:36:26','2025-07-30 07:36:26'),(28,'Emard, Rowe and Grimes','2025-07-30 07:36:26','2025-07-30 07:36:26'),(29,'Corkery, Langworth and Schumm','2025-07-30 07:36:26','2025-07-30 07:36:26'),(30,'Fisher, Kautzer and Ferry','2025-07-30 07:36:26','2025-07-30 07:36:26'),(31,'Kuhlman and Sons','2025-07-30 07:36:26','2025-07-30 07:36:26'),(32,'Graham-Lockman','2025-07-30 07:36:27','2025-07-30 07:36:27'),(33,'Raynor, Champlin and Keebler','2025-07-30 07:36:28','2025-07-30 07:36:28'),(34,'Walsh Ltd','2025-07-30 07:36:28','2025-07-30 07:36:28'),(35,'Smith-Rosenbaum','2025-07-30 07:36:29','2025-07-30 07:36:29'),(36,'Walter Ltd','2025-07-30 07:36:30','2025-07-30 07:36:30'),(37,'Miller-Zemlak','2025-07-30 07:36:30','2025-07-30 07:36:30'),(38,'Swaniawski, Gleichner and Ziemann','2025-07-30 07:36:31','2025-07-30 07:36:31'),(39,'Reynolds, Altenwerth and Hane','2025-07-30 07:36:31','2025-07-30 07:36:31'),(40,'Bradtke-Pouros','2025-07-30 07:36:32','2025-07-30 07:36:32'),(41,'VonRueden Group','2025-07-30 07:36:32','2025-07-30 07:36:32'),(42,'O\'Kon and Sons','2025-07-30 07:36:33','2025-07-30 07:36:33'),(43,'Mante LLC','2025-07-30 07:36:33','2025-07-30 07:36:33'),(44,'Orn PLC','2025-07-30 07:36:33','2025-07-30 07:36:33'),(45,'Kassulke, Schneider and Cassin','2025-07-30 07:36:33','2025-07-30 07:36:33'),(46,'Hudson Ltd','2025-07-30 07:36:34','2025-07-30 07:36:34'),(47,'Mitchell, Rogahn and Bogan','2025-07-30 07:36:34','2025-07-30 07:36:34'),(48,'Ryan, Kuhlman and Goodwin','2025-07-30 07:36:35','2025-07-30 07:36:35'),(49,'Schinner LLC','2025-07-30 07:36:35','2025-07-30 07:36:35'),(50,'Bashirian, Pagac and Murphy','2025-07-30 07:36:35','2025-07-30 07:36:35'),(51,'Emard-Hoeger','2025-07-30 07:36:35','2025-07-30 07:36:35'),(52,'Jones-Olson','2025-07-30 07:36:36','2025-07-30 07:36:36'),(53,'Gutmann Group','2025-07-30 07:36:36','2025-07-30 07:36:36'),(54,'Bergnaum LLC','2025-07-30 07:36:37','2025-07-30 07:36:37'),(55,'Murray, Smitham and Emard','2025-07-30 07:36:37','2025-07-30 07:36:37'),(56,'Armstrong Ltd','2025-07-30 07:36:37','2025-07-30 07:36:37'),(57,'Waters, O\'Keefe and Dickinson','2025-07-30 07:36:37','2025-07-30 07:36:37'),(58,'Deckow LLC','2025-07-30 07:36:38','2025-07-30 07:36:38'),(59,'Bartell Ltd','2025-07-30 07:36:38','2025-07-30 07:36:38'),(60,'Bayer LLC','2025-07-30 07:36:39','2025-07-30 07:36:39'),(61,'Feeney-Hoeger','2025-07-30 07:36:39','2025-07-30 07:36:39'),(62,'Yundt-Kirlin','2025-07-30 07:36:39','2025-07-30 07:36:39'),(63,'Ernser, Roob and Wisoky','2025-07-30 07:36:40','2025-07-30 07:36:40'),(64,'Bartell, Schneider and Bayer','2025-07-30 07:36:40','2025-07-30 07:36:40'),(65,'Kiehn LLC','2025-07-30 07:36:40','2025-07-30 07:36:40'),(66,'Thiel Group','2025-07-30 07:36:40','2025-07-30 07:36:40'),(67,'Rippin and Sons','2025-07-30 07:36:41','2025-07-30 07:36:41'),(68,'Waelchi Group','2025-07-30 07:36:41','2025-07-30 07:36:41'),(69,'Volkman, Schulist and Doyle','2025-07-30 07:36:42','2025-07-30 07:36:42'),(70,'Weber-O\'Kon','2025-07-30 07:36:42','2025-07-30 07:36:42'),(71,'Deckow-Kuphal','2025-07-30 07:36:42','2025-07-30 07:36:42'),(72,'Smith-Schinner','2025-07-30 07:36:42','2025-07-30 07:36:42'),(73,'Bogan-Berge','2025-07-30 07:36:43','2025-07-30 07:36:43'),(74,'Howell, Beahan and Dare','2025-07-30 07:36:43','2025-07-30 07:36:43'),(75,'Keeling, Skiles and Blanda','2025-07-30 07:36:44','2025-07-30 07:36:44'),(76,'Mayert-Bahringer','2025-07-30 07:36:44','2025-07-30 07:36:44'),(77,'Bode and Sons','2025-07-30 07:36:44','2025-07-30 07:36:44'),(78,'McCullough-Breitenberg','2025-07-30 07:36:44','2025-07-30 07:36:44'),(79,'Hyatt, Farrell and Fisher','2025-07-30 07:36:45','2025-07-30 07:36:45'),(80,'Raynor Ltd','2025-07-30 07:36:45','2025-07-30 07:36:45'),(81,'osos maduros','2025-07-30 09:33:13','2025-07-30 09:33:13'),(82,'osos madureeos','2025-07-30 09:33:46','2025-07-30 09:33:46');
/*!40000 ALTER TABLE `equipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1),(4,'2025_07_23_033404_create_equipos_table',1),(5,'2025_07_23_033424_create_proyectos_table',1),(6,'2025_07_23_033443_create_tareas_table',1),(7,'2025_07_23_033511_create_usuarios_table',1),(8,'2025_07_23_033611_create_asignaciones_table',1),(9,'2025_07_23_062036_create_personal_access_tokens_table',1),(10,'2025_07_29_220023_create_equipo_usuario_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  KEY `personal_access_tokens_expires_at_index` (`expires_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proyectos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `equipos_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `proyectos_equipos_id_foreign` (`equipos_id`),
  CONSTRAINT `proyectos_equipos_id_foreign` FOREIGN KEY (`equipos_id`) REFERENCES `equipos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectos`
--

LOCK TABLES `proyectos` WRITE;
/*!40000 ALTER TABLE `proyectos` DISABLE KEYS */;
INSERT INTO `proyectos` VALUES (1,'a et','Eum aperiam at odio incidunt sunt explicabo maxime. At error veniam ipsa est. Maiores sed consequatur ad et non hic. Est qui fuga inventore optio quia expedita dicta.',11,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(2,'ipsam voluptatem dolorem asperiores','Temporibus quam illum et ipsum ab. Fugiat sunt necessitatibus qui cum. Libero autem porro placeat consequatur assumenda nemo maiores.',12,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(3,'quam aut sapiente consequatur','Aut iusto minima et ab minima enim dolorum. Ex placeat illum et. Et qui et itaque asperiores. Sed dolor pariatur animi ratione.',13,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(4,'hic harum atque tempore','Non quis voluptas repellendus minus maxime accusantium. Dolorem voluptatem eligendi sit et distinctio. Aut dolorum et velit aut magnam ab.',14,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(5,'exercitationem ut','Suscipit voluptas non non delectus voluptatem error. Quod deserunt quam et. Consequatur suscipit qui at et.',15,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(6,'consequatur laudantium voluptas','Voluptatem qui laborum eius et sed. Et omnis tenetur ducimus ut nulla atque dolor. Non voluptatem neque natus consequatur quae dolor. Quasi adipisci veniam rerum ea.',16,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(7,'minima qui pariatur sint','Cumque inventore esse explicabo soluta accusamus ipsum. Fugit ea assumenda ullam vel. Velit earum autem modi sit. Optio necessitatibus perferendis sunt sunt est et asperiores.',17,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(8,'reprehenderit minima et labore','Sed minima suscipit distinctio tempora officiis non. Voluptas nesciunt sit non debitis est soluta beatae. Eum et reprehenderit quasi ex voluptatum fuga. Nostrum sed eligendi laboriosam quae eveniet.',18,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(9,'eveniet quisquam recusandae tempore','Distinctio et nobis et distinctio quas quia. Repudiandae totam non et natus et et. Autem nisi laboriosam fugiat libero quia.',19,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(10,'dolor facilis qui','Delectus ipsam mollitia quisquam fuga quam laudantium sapiente. Facilis iusto et recusandae assumenda suscipit. Voluptates et accusamus sunt sunt et eaque. Nisi iste autem nulla. Molestiae laborum rerum dolor dolor et soluta mollitia temporibus.',20,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(11,'vel earum','Expedita aperiam a aliquam error rerum eius. Vero maxime qui sed consectetur. Optio labore assumenda sit sunt nulla mollitia quas sint. Corrupti recusandae cupiditate voluptates. Nisi quaerat necessitatibus iste occaecati inventore nisi.',21,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(12,'et modi similique et','Sit omnis non est hic odit pariatur. Vel quisquam ipsam necessitatibus sequi impedit mollitia. Est dolores dicta in totam eum.',22,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(13,'hic veniam error ea','Ut eos commodi recusandae omnis qui repellendus ut. Eos voluptatum modi eligendi ut eveniet ad voluptas. Expedita qui consequatur enim. Ipsa quo nemo aliquid aut enim voluptatum occaecati.',23,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(14,'adipisci iusto iusto','Fugit ipsa expedita est omnis. Quam est et vitae ut est. Quam quia sed illo fugit possimus modi. Nostrum facere soluta sit dolore similique. Enim voluptates sed commodi ab officiis.',24,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(15,'illo autem','Illo harum unde ut velit. Sed quasi molestiae ipsa voluptatem non pariatur. Cupiditate reiciendis modi aliquam omnis ut voluptas sint.',25,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(16,'saepe quia','Est quo magnam debitis cumque sed. Distinctio aspernatur ut cumque. Maiores unde ullam facilis rerum.',26,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(17,'laborum molestias molestias','Repudiandae reiciendis placeat rerum facilis consequatur. Soluta ab est doloremque ipsa aut iste maiores. Aliquid inventore amet voluptatum possimus eos aliquam officia et. Cum necessitatibus quaerat qui qui sunt et.',27,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(18,'et nisi sint eos','Mollitia aperiam dolor qui vel reprehenderit molestiae. Accusantium corrupti reiciendis quo hic labore sequi. Alias inventore assumenda assumenda quia sit ratione voluptatum. Veritatis magni repellendus sapiente non illum. Aperiam aut eum blanditiis asperiores aut.',28,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(19,'molestiae autem','Mollitia ut et omnis debitis aliquid in ullam. Est odio non similique dicta quasi. Et et cum et ad.',29,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(20,'quia vitae','Deserunt cumque fugiat molestias debitis quia explicabo. Id explicabo sed aperiam quas qui cupiditate quia. Repudiandae doloribus voluptas ut excepturi nesciunt totam nobis et.',30,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(21,'unde accusantium','Laborum non pariatur velit. Culpa consectetur laudantium blanditiis. Eos amet tempora ut dolorum quia vel qui.',41,'2025-07-30 07:36:32','2025-07-30 07:36:32'),(22,'culpa dolores','Deserunt est facere reiciendis et consectetur qui animi odit. Qui rerum magni commodi dolor dignissimos. Officia voluptas rerum eaque. Possimus numquam rerum est enim voluptas animi ratione.',43,'2025-07-30 07:36:33','2025-07-30 07:36:33'),(23,'sunt laudantium','Voluptates sint nihil amet molestias dolore et asperiores ipsam. Et ad facere quia nihil iusto consequatur ut dolores. Illum veniam illo sunt sequi praesentium voluptas. Sed voluptatem aut nobis enim atque consequatur labore.',45,'2025-07-30 07:36:33','2025-07-30 07:36:33'),(24,'magnam animi natus sit','Tenetur et est odio quod quia cumque dignissimos. Laborum doloribus ipsam eos totam. Quam asperiores nesciunt sit culpa quidem est. Autem aut laborum perferendis ipsa.',47,'2025-07-30 07:36:34','2025-07-30 07:36:34'),(25,'ut odio libero porro','Et asperiores similique dolores sunt error nobis sit earum. Amet molestiae ratione repudiandae laboriosam sunt rem dolorem.',49,'2025-07-30 07:36:35','2025-07-30 07:36:35'),(26,'eius nihil','Eaque eum omnis magni non alias repellendus saepe. Voluptas aspernatur molestias autem accusamus eum sint. Numquam ut aut quo est.',51,'2025-07-30 07:36:35','2025-07-30 07:36:35'),(27,'dolor aut','Tempore quia repudiandae quae architecto temporibus voluptatem. A unde in officiis sunt ut placeat fuga alias. Et omnis sit quos exercitationem ipsum.',53,'2025-07-30 07:36:36','2025-07-30 07:36:36'),(28,'odit est libero','Et fugiat libero dolorum eum fuga quis quas. Inventore voluptas occaecati non placeat voluptatem similique. Qui cupiditate et sunt maxime veritatis maiores nam omnis. Et accusantium quasi sunt eius sapiente. Vitae sint facere iusto quae maiores.',55,'2025-07-30 07:36:37','2025-07-30 07:36:37'),(29,'et quis voluptas sed','Rerum asperiores dolorem dicta. Aliquid accusantium aut quia nesciunt suscipit nostrum. Aut quam praesentium tenetur voluptas neque et.',57,'2025-07-30 07:36:37','2025-07-30 07:36:37'),(30,'minus consequatur','Saepe eum sit dolorem assumenda ducimus tenetur. Id quia vero libero nobis. Ad eos iure nemo nihil voluptate aut.',59,'2025-07-30 07:36:38','2025-07-30 07:36:38');
/*!40000 ALTER TABLE `proyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('Bj5oOi8wbGxbxvNi8UpHaFMywg18i8kI4JNTecn0',NULL,'127.0.0.1','PostmanRuntime/7.44.1','YTozOntzOjY6Il90b2tlbiI7czo0MDoic3JXQklpeXkwbDFEQmJaTFRoZ0YxM1hqUGNFRXpIWHJ4SmxpaXlScyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1753843705),('yM4xIpcwA6Y7n06TLwHki1umNYtG1rJXyZ9CcK3D',NULL,'127.0.0.1','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiMnZjMmFuSTdONjg4bXRsTzhKMTVIb0VKZHpEbG90YjdGYXB2U3F2SiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1753840113);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tareas`
--

DROP TABLE IF EXISTS `tareas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tareas` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `programacion_inicio` date NOT NULL,
  `programacion_fin` date NOT NULL,
  `prioridad` varchar(255) NOT NULL,
  `estatus` varchar(255) NOT NULL,
  `proyectos_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tareas_proyectos_id_foreign` (`proyectos_id`),
  CONSTRAINT `tareas_proyectos_id_foreign` FOREIGN KEY (`proyectos_id`) REFERENCES `proyectos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tareas`
--

LOCK TABLES `tareas` WRITE;
/*!40000 ALTER TABLE `tareas` DISABLE KEYS */;
INSERT INTO `tareas` VALUES (1,'Voluptatum vel id eos.','2025-07-26','2025-08-12','media','en progreso',11,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(2,'Eos illo placeat porro laboriosam.','2025-07-12','2025-07-26','alta','en progreso',12,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(3,'Reprehenderit vero ipsum id.','2025-07-18','2025-08-17','media','en progreso',13,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(4,'Quasi sed ipsum voluptas.','2025-07-25','2025-08-16','baja','en progreso',14,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(5,'Quia dolor dicta.','2025-07-08','2025-08-05','baja','pendiente',15,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(6,'Quidem omnis.','2025-07-25','2025-08-11','alta','completada',16,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(7,'Quia sed error eos deserunt.','2025-07-06','2025-07-28','baja','completada',17,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(8,'Quis ab ut nemo et.','2025-07-19','2025-07-24','baja','pendiente',18,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(9,'Vel et est ab.','2025-07-29','2025-08-14','baja','completada',19,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(10,'Iste ab placeat.','2025-07-25','2025-08-18','media','en progreso',20,'2025-07-30 07:36:26','2025-07-30 07:36:26'),(11,'Voluptas aut est numquam voluptas.','2025-07-26','2025-08-01','media','completada',21,'2025-07-30 07:36:32','2025-07-30 07:36:32'),(12,'Voluptatibus aut deserunt.','2025-07-02','2025-07-06','alta','completada',22,'2025-07-30 07:36:33','2025-07-30 07:36:33'),(13,'Repudiandae atque ullam.','2025-07-28','2025-08-07','baja','en progreso',23,'2025-07-30 07:36:33','2025-07-30 07:36:33'),(14,'Quia assumenda voluptatem commodi.','2025-07-22','2025-08-07','media','pendiente',24,'2025-07-30 07:36:34','2025-07-30 07:36:34'),(15,'Ut minus vel ut.','2025-07-04','2025-07-30','alta','pendiente',25,'2025-07-30 07:36:35','2025-07-30 07:36:35'),(16,'Aut aut voluptates corporis.','2025-07-18','2025-07-27','alta','en progreso',26,'2025-07-30 07:36:35','2025-07-30 07:36:35'),(17,'Est odio eaque.','2025-07-29','2025-08-15','alta','completada',27,'2025-07-30 07:36:36','2025-07-30 07:36:36'),(18,'Hic iusto at.','2025-07-14','2025-07-27','alta','pendiente',28,'2025-07-30 07:36:37','2025-07-30 07:36:37'),(19,'Corporis hic suscipit autem.','2025-07-23','2025-07-31','baja','pendiente',29,'2025-07-30 07:36:37','2025-07-30 07:36:37'),(20,'Dolores enim dicta molestiae.','2025-07-29','2025-08-09','media','en progreso',30,'2025-07-30 07:36:38','2025-07-30 07:36:38');
/*!40000 ALTER TABLE `tareas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `rol` enum('admin','cliente') NOT NULL DEFAULT 'cliente',
  `imagen` varchar(255) DEFAULT NULL,
  `equipo_activo_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuarios_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'arisai 3','devan.homen22i333333ck@exaffxxxxmdddllssldddkple.com','2025-07-30 07:36:26','$2y$12$R/1NCkXtzaIo.NTM.qyrw.A8gpZWHdKYE3vf1m1UOeaATz4vmBr4C','cliente','https://via.placeholder.com/400x400.png/005577?text=people+inventore',1,'2025-07-30 07:36:32','2025-07-30 11:46:56'),(2,'Dr. Lisandro McGlynn DDS','zelma59@example.com','2025-07-30 07:36:26','$2y$12$xts1ExoElLkkF7zgEP5BAO/KsVjAoO0PGY4nkOt/v9cJTnt59489i','cliente','https://via.placeholder.com/400x300.png/004466?text=people+usuario+impedit',32,'2025-07-30 07:36:32','2025-07-30 07:36:32'),(3,'Marian Heidenreich','danielle.brown@example.org','2025-07-30 07:36:27','$2y$12$hFBlX6XuoSAKcAGVLHVloOt4QmGDhvNUmxhN/Ye8gxN/UhmSqtyiO','cliente',NULL,33,'2025-07-30 07:36:32','2025-07-30 07:36:32'),(4,'Mr. Dewitt Bernier IV','zblick@example.net','2025-07-30 07:36:28','$2y$12$D1G4YImh0PUY//uaxeMlyO/wTziArw8eci6gUkYQmkTEVnJarEWJa','cliente',NULL,34,'2025-07-30 07:36:32','2025-07-30 07:36:32'),(5,'Theresia Mayer','yost.alda@example.net','2025-07-30 07:36:28','$2y$12$1rR2dI8ySTm3T1V7cc45xOzl84OJ5BB1EsElDJi5hTZ7u4vWObBme','cliente','https://via.placeholder.com/400x300.png/002200?text=people+usuario+eos',35,'2025-07-30 07:36:32','2025-07-30 07:36:32'),(6,'Keara Purdy PhD','yjohnston@example.org','2025-07-30 07:36:29','$2y$12$MO5PzPHZGv2Y2VAA9Lf1ru0Rwadew/uQaso./A1aqCicF0CO/QgTW','cliente',NULL,36,'2025-07-30 07:36:32','2025-07-30 07:36:32'),(7,'Violette Torphy','plockman@example.net','2025-07-30 07:36:30','$2y$12$CuWQ9.S/daGk6KOc2hHgK.kZzi.u7uKJSDMPWuiYVE3DTlp8LhaDW','cliente',NULL,37,'2025-07-30 07:36:32','2025-07-30 07:36:32'),(8,'Prof. Bonnie Keebler I','dorothy92@example.org','2025-07-30 07:36:30','$2y$12$g4kaS2IGUQwXazhgwu9ty.Cu2BTuFWyQm30eOjWUBp0zwrJvFbFhy','cliente','https://via.placeholder.com/400x300.png/00bb55?text=people+usuario+soluta',38,'2025-07-30 07:36:32','2025-07-30 07:36:32'),(9,'Dr. Ashton Carroll','fbrekke@example.org','2025-07-30 07:36:31','$2y$12$QP4voYltLawqvkK4LNiSC.qMTfQTY6UjJJ/XPbTjBHxBGizIyNBVi','cliente','https://via.placeholder.com/400x300.png/0000dd?text=people+usuario+quos',39,'2025-07-30 07:36:32','2025-07-30 07:36:32'),(10,'Prof. Loyal Walsh','laney86@example.org','2025-07-30 07:36:31','$2y$12$u/RHJjw.44damxSic/PNKeb6ejlJXxnlOnYM3QJ5KqeQK2vFGLXLq','cliente',NULL,40,'2025-07-30 07:36:32','2025-07-30 07:36:32'),(11,'Regan Cormier DDS','vita72@example.net','2025-07-30 07:36:32','$2y$12$QGf/QmQBgf/m.YYUNHLOyePW4J2DSGpVcNJJji1cKvD6N3DLcbsoS','cliente',NULL,42,'2025-07-30 07:36:33','2025-07-30 07:36:33'),(12,'Mr. Narciso Wintheiser','cweimann@example.net','2025-07-30 07:36:33','$2y$12$cyZeIn2Z1hkcPo/kaqggpOTq/Ly1SG0suYsue3tRcPGVI6elBKIiK','cliente',NULL,44,'2025-07-30 07:36:33','2025-07-30 07:36:33'),(13,'Cesar Rath','zackery.walsh@example.org','2025-07-30 07:36:33','$2y$12$5t6twcfxlsHxwyndsRVTfua.cS0uzoKdqHiig0OLy7fNeCwASJVri','cliente','https://via.placeholder.com/400x300.png/00ee33?text=people+usuario+et',46,'2025-07-30 07:36:34','2025-07-30 07:36:34'),(14,'Van Conn','alan.dickens@example.net','2025-07-30 07:36:34','$2y$12$N/Zr.1drRzuaY83WVfwoDOyPk0u8RRhGjjX0WZ075G2T0lTDx1H5e','cliente','https://via.placeholder.com/400x300.png/006666?text=people+usuario+qui',48,'2025-07-30 07:36:35','2025-07-30 07:36:35'),(15,'Miss Kaitlin Anderson','lind.julie@example.com','2025-07-30 07:36:35','$2y$12$4FekyLNTwl0RJL23rMdhWOoWc6XYPf4wRGRjIYgjG4whIsHve7cli','cliente',NULL,50,'2025-07-30 07:36:35','2025-07-30 07:36:35'),(16,'Terrence Hermann','etreutel@example.com','2025-07-30 07:36:35','$2y$12$YDVyCDVn3oA0RZgExpVz1u3zSx/lUElcff9D1VxdXDysnEZEQ0Jq.','cliente','https://via.placeholder.com/400x300.png/00bbff?text=people+usuario+dolorum',52,'2025-07-30 07:36:36','2025-07-30 07:36:36'),(17,'Prof. Lilliana Schimmel','giles63@example.com','2025-07-30 07:36:36','$2y$12$Eeg2ghQ9FA2cSnhrJI9qButd0t5Y7f61FZnIwlPYzOab7oGhAST4u','cliente',NULL,54,'2025-07-30 07:36:37','2025-07-30 07:36:37'),(18,'Kamryn Windler II','rtrantow@example.org','2025-07-30 07:36:37','$2y$12$R9eY9xsHJC/MRhvsioYngOvPj.x0fyqKon94fI5kIX.7XUY.k0Ibq','cliente',NULL,56,'2025-07-30 07:36:37','2025-07-30 07:36:37'),(19,'Hanna Kreiger','xharvey@example.org','2025-07-30 07:36:37','$2y$12$Cx7wzZaCJ3ywdnvRccbypetKW28mH910g/nf9JgpCKxxdlmiNU2Mm','cliente',NULL,58,'2025-07-30 07:36:38','2025-07-30 07:36:38'),(20,'Maritza Moore Sr.','kmccullough@example.com','2025-07-30 07:36:38','$2y$12$Sxiygztx0SjrFa4uIWMgGudH7M1mn.PjiWkiP7PkvNXv4azA3vU3O','cliente','https://via.placeholder.com/400x300.png/00ffff?text=people+usuario+et',60,'2025-07-30 07:36:39','2025-07-30 07:36:39'),(21,'Dr. Oda Wolf PhD','morar.jessie@example.net','2025-07-30 07:36:39','$2y$12$nt38LHcsoYTcfWpBApkxt.VuiWOsxvibAAnj56YHQjr92l3iTPUqq','cliente',NULL,61,'2025-07-30 07:36:39','2025-07-30 07:36:39'),(22,'Miss Carmen Goodwin PhD','heathcote.laverna@example.com','2025-07-30 07:36:39','$2y$12$7sXtcwUu3ZOp.Es/5DNVUeaAVw9LG/66elfaxBxmCZJS8K7O60t.u','cliente','https://via.placeholder.com/400x300.png/005533?text=people+usuario+reprehenderit',63,'2025-07-30 07:36:40','2025-07-30 07:36:40'),(23,'Ms. Sandrine Swaniawski IV','kassulke.adriel@example.net','2025-07-30 07:36:40','$2y$12$us7OVJgZm/IVUg8hD/Rt..l2qGnhJ1GNOI0ERJg4L.P810RGTfWLm','cliente','https://via.placeholder.com/400x300.png/005533?text=people+usuario+provident',65,'2025-07-30 07:36:40','2025-07-30 07:36:40'),(24,'Prof. Rylee Frami Sr.','mills.estrella@example.com','2025-07-30 07:36:40','$2y$12$Ft0GvBo203wjfdkq7Pi4j.ZsE6cq9PL..CTKA4clHfZm8nUCH7r3C','cliente','https://via.placeholder.com/400x300.png/00ccdd?text=people+usuario+sit',67,'2025-07-30 07:36:41','2025-07-30 07:36:41'),(25,'Maximillia Terry','deangelo.littel@example.com','2025-07-30 07:36:41','$2y$12$2qlBXeV8eDzM2GcPy3KTPeXzKSS7xCHoWkkj0LETtZpBssBlKmf0i','cliente','https://via.placeholder.com/400x300.png/0000cc?text=people+usuario+est',69,'2025-07-30 07:36:42','2025-07-30 07:36:42'),(26,'Jackie Fahey','raphaelle69@example.com','2025-07-30 07:36:42','$2y$12$d3jC4.Akh5ybE.TPtHpxHOXysSNP/R0YzS6JZjHtyfXzlbcaR8nYO','cliente','https://via.placeholder.com/400x300.png/000099?text=people+usuario+repellendus',71,'2025-07-30 07:36:42','2025-07-30 07:36:42'),(27,'Skylar O\'Reilly','schumm.pete@example.net','2025-07-30 07:36:42','$2y$12$P0BP6N1RMSBQTPiOCdWVI.HRH2U0CqIGsslH4t4QYxkWncenxfsWq','cliente',NULL,73,'2025-07-30 07:36:43','2025-07-30 07:36:43'),(28,'Dr. Torey Harvey PhD','emil92@example.org','2025-07-30 07:36:43','$2y$12$BOTjbSATQrUIPLjVMArU3OYB2TywKeXBpCLILkiKgRaCZeBvttjfe','cliente','https://via.placeholder.com/400x300.png/005500?text=people+usuario+maiores',75,'2025-07-30 07:36:44','2025-07-30 07:36:44'),(29,'Dr. Fidel Fadel','braun.ricardo@example.org','2025-07-30 07:36:44','$2y$12$Qvh5ExDcBd6zYtzGF.e3ZesoPpd/oB82g1XbofnH5RD0.fXJDOuky','cliente','https://via.placeholder.com/400x300.png/0066ee?text=people+usuario+tempora',77,'2025-07-30 07:36:44','2025-07-30 07:36:44'),(30,'Mariam Leuschke','dario.stark@example.com','2025-07-30 07:36:44','$2y$12$dJKcHBGInvqnrF2dKJpAS.QKKe2cypodMVK19LpZeu08DfoaMfUxa','cliente','https://via.placeholder.com/400x300.png/0000cc?text=people+usuario+qui',79,'2025-07-30 07:36:45','2025-07-30 07:36:45'),(31,'arisai','devan.homenick@exaffxxxxmdddllssldddkple.com',NULL,'$2y$12$kSTt68cvZcY9PebYlwZ0FOxHrgmKGkrPYx4CoU4M9boJYG4p9QiPu','cliente','https://via.placeholder.com/400x400.png/005577?text=people+inventore',NULL,'2025-07-30 09:31:43','2025-07-30 09:31:43'),(32,'arisai 3','devan.homeni333333ck@exaffxxxxmdddllssldddkple.com',NULL,'$2y$12$ipsh0ml1lbRTFeZLlIhz8uidXMw0G1n7uaZLnOHN5M4j1rKnbKZxC','cliente','https://via.placeholder.com/400x400.png/005577?text=people+inventore',NULL,'2025-07-30 09:35:38','2025-07-30 09:35:38'),(33,'El pepe','yonotengoideas@gmail.com',NULL,'$2y$12$SoRzt845kcHHxhVBS2R/wO5pAdqByNyxC10UsEvlVDCTswGws1aR6','cliente','https://us.123rf.com/450wm/milkos/milkos2408/milkos240804446/234719417-smiling-african-american-man-showing-thumb-up-at-camera.jpg?ver=6',NULL,'2025-07-30 16:36:39','2025-07-30 16:36:39'),(34,'El pzzepe','impresiones.en.corto@gmail.com',NULL,'$2y$12$spnmhU8d4ulLNxv0OKg1nu2enRz2QGR5NL7UYlFR9LKCrHDA1sudu','cliente','https://us.123rf.com/450wm/milkos/milkos2408/milkos240804446/234719417-smiling-african-american-man-showing-thumb-up-at-camera.jpg?ver=6',NULL,'2025-07-30 16:44:22','2025-07-30 16:44:22');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'projectmanager'
--

--
-- Dumping routines for database 'projectmanager'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-30  7:42:50
