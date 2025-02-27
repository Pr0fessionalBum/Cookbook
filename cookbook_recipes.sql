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
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `instructions` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'Classic Chicken Stir-Fry','1. Cut chicken breast into bite-sized pieces\n2. Heat oil in a large wok over medium-high heat\n3. Cook chicken until golden brown, about 5-7 minutes\n4. Remove chicken and set aside\n5. Stir-fry vegetables until crisp-tender\n6. Add sauce and return chicken to wok\n7. Cook until sauce thickens\n8. Serve hot over rice'),(2,'Spicy Beef Tacos','1. Brown ground beef in a large skillet\n2. Add taco seasonings and cook for 2-3 minutes\n3. Warm tortillas\n4. Assemble tacos with desired toppings\n5. Serve immediately with lime wedges'),(3,'Honey Garlic Salmon','1. Preheat oven to 400°F\n2. Mix honey, garlic, and soy sauce\n3. Place salmon in baking dish\n4. Pour sauce over salmon \n5. Bake for 15-20 minutes\n6. Garnish with green onions'),(4,'Mediterranean Quinoa Bowl','1. Cook quinoa according to package instructions\n2. Roast vegetables with olive oil and seasonings\n3. Prepare protein of choice\n4. Assemble bowls with quinoa base\n5. Top with roasted vegetables and protein\n6. Drizzle with dressing\n7. Garnish with fresh herbs'),(5,'Creamy Mushroom Pasta','1. Cook pasta al dente\n2. Sauté mushrooms and garlic in butter\n3. Add heavy cream and parmesan\n4. Simmer until sauce thickens\n5. Toss with pasta\n6. Season to taste\n7. Garnish with fresh parsley'),(6,'Asian-Style Tofu Stir-Fry','1. Press and cube tofu\n2. Mix stir-fry sauce\n3. Pan-fry tofu until golden\n4. Stir-fry vegetables\n5. Combine everything with sauce\n6. Serve over rice'),(7,'Greek Salad with Grilled Chicken','1. Season and grill chicken breast\n2. Chop vegetables\n3. Make dressing\n4. Slice cooked chicken\n5. Assemble salad\n6. Top with feta cheese\n7. Drizzle with dressing'),(8,'Spicy Shrimp Scampi','1. Clean and devein shrimp\n2. Heat olive oil and butter\n3. Cook garlic until fragrant\n4. Add shrimp and red pepper flakes\n5. Add wine and lemon juice\n6. Toss with pasta\n7. Garnish with parsley'),(9,'Sweet and Sour Pork','1. Cut pork into cubes\n2. Make sweet and sour sauce\n3. Fry pork until crispy\n4. Stir-fry vegetables\n5. Combine with sauce\n6. Serve over rice'),(10,'Vegetarian Buddha Bowl','1. Cook brown rice\n2. Roast sweet potatoes\n3. Prepare other vegetables\n4. Make tahini dressing\n5. Assemble bowls\n6. Top with seeds\n7. Drizzle with dressing'),(11,'Vietnamese Banh Mi','1. Prepare the pickled vegetables: slice carrots and daikon into thin strips, mix with vinegar solution\n2. Marinate pork with garlic, soy sauce, and spices\n3. Grill or pan-fry pork until cooked through\n4. Split baguette lengthwise and lightly toast\n5. Spread mayonnaise and pâté on bread\n6. Layer with pork, pickled vegetables, cucumber, cilantro\n7. Add jalapeños to taste\n8. Serve immediately while bread is still crispy'),(12,'Classic Chicken Sandwich','1. Butterfly chicken breast and pound to even thickness\n2. Season with salt, pepper, and garlic powder\n3. Dredge in flour, egg wash, then breadcrumbs\n4. Heat oil in pan until shimmering\n5. Fry chicken until golden brown and cooked through (165°F)\n6. Toast buns with butter\n7. Layer with mayonnaise, lettuce, tomato\n8. Add chicken and serve immediately'),(13,'Taro Pound Cake','1. Preheat oven to 350°F\n2. Cream butter and sugar until light and fluffy (about 5 minutes)\n3. Add eggs one at a time, beating well after each\n4. Mix taro paste and vanilla extract\n5. Alternate adding dry ingredients and milk\n6. Fold in mashed taro root\n7. Pour into greased and floured loaf pan\n8. Bake 60-65 minutes until toothpick comes out clean\n9. Cool in pan 10 minutes, then remove to rack'),(14,'Beef Stroganoff','1. Slice beef against the grain into thin strips\n2. Season beef with salt and pepper\n3. Sauté mushrooms and onions in butter until golden\n4. Remove vegetables, add beef to pan and brown\n5. Deglaze with chicken broth, scraping up brown bits\n6. Add back vegetables, stir in sour cream and heavy cream\n7. Simmer until sauce thickens\n8. Serve over hot egg noodles\n9. Garnish with parsley'),(15,'My Dad\'s Chili','1. Brown ground beef and Italian sausage in large pot\n2. Add diced onions and garlic, cook until softened\n3. Add secret spice blend: chili powder, cumin, paprika, and red pepper flakes\n4. Stir in diced tomatoes and kidney beans\n5. Add hot sauce to taste\n6. Simmer uncovered for 3 hours, stirring occasionally\n7. Season to taste with salt and pepper\n8. Top with shredded cheese and green onions\n9. Serve with cornbread\nNote: For extra kick, add a diced jalapeño with the onions'),(16,'Sesame Ginger Salmon Bowl','1. Marinate salmon in soy ginger sauce\n2. Cook rice according to package\n3. Roast salmon at 400°F\n4. Steam vegetables\n5. Assemble bowl\n6. Drizzle with sauce\n7. Sprinkle with sesame seeds'),(17,'Mediterranean Lamb Skewers','1. Cut lamb into cubes\n2. Marinate with herbs and garlic\n3. Thread onto skewers\n4. Grill until desired doneness\n5. Serve with tzatziki\n6. Garnish with fresh herbs'),(18,'Vegetable Curry','1. Sauté onions and garlic\n2. Add curry paste and spices\n3. Add vegetables and coconut milk\n4. Simmer until vegetables are tender\n5. Serve over rice\n6. Garnish with cilantro'),(19,'Shrimp and Grits','1. Cook grits until creamy\n2. Sauté shrimp with garlic\n3. Add cream sauce\n4. Serve shrimp over grits\n5. Top with green onions\n6. Add hot sauce if desired'),(20,'Turkey Meatballs','1. Mix ground turkey with seasonings\n2. Form into balls\n3. Brown in skillet\n4. Add sauce\n5. Simmer until cooked through\n6. Serve over pasta'),(21,'Pork Fried Rice','1. Cook rice and let cool\n2. Dice pork and vegetables\n3. Scramble eggs\n4. Stir-fry everything together\n5. Add soy sauce and seasonings\n6. Garnish with green onions'),(22,'Cod Fish Tacos','1. Season cod fillets\n2. Make slaw\n3. Cook fish until flaky\n4. Warm tortillas\n5. Assemble tacos\n6. Add toppings and sauce'),(23,'Quinoa Stuffed Peppers','1. Cook quinoa\n2. Mix with vegetables and seasonings\n3. Cut and clean peppers\n4. Fill peppers\n5. Bake until tender\n6. Top with cheese'),(24,'Chicken Alfredo','1. Cook pasta\n2. Make cream sauce\n3. Cook chicken\n4. Combine everything\n5. Add parmesan\n6. Garnish with parsley'),(25,'Tofu Pad Thai','1. Soak rice noodles\n2. Press and cube tofu\n3. Make sauce\n4. Stir-fry ingredients\n5. Combine with noodles\n6. Garnish with peanuts'),(26,'Eggplant Parmesan','1. Slice and salt eggplant\n2. Bread eggplant slices\n3. Fry until golden\n4. Layer with sauce and cheese\n5. Bake until bubbly\n6. Let rest before serving'),(27,'Greek Spinach Pie','1. Sauté spinach and onions\n2. Mix with feta\n3. Layer phyllo dough\n4. Add filling\n5. Bake until golden\n6. Cool slightly before cutting'),(28,'BBQ Pulled Pork','1. Season pork shoulder\n2. Slow cook for 8 hours\n3. Shred meat\n4. Add BBQ sauce\n5. Serve on buns\n6. Top with coleslaw'),(29,'Mushroom Risotto','1. Sauté mushrooms\n2. Toast rice\n3. Add broth gradually\n4. Stir until creamy\n5. Finish with parmesan\n6. Garnish with herbs'),(30,'Buffalo Chicken Wings','1. Pat wings dry\n2. Season wings\n3. Bake until crispy\n4. Toss in buffalo sauce\n5. Serve with celery\n6. Add blue cheese dressing');
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
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
