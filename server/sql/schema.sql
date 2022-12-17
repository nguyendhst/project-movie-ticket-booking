-- MySQL 8.0 
-- Movie Database Schema
-- Serverless DB: PlanetScale

-- Create the database
CREATE DATABASE IF NOT EXISTS movie_db;

-- Use the database
USE movie_db;

-- Create movies table
DROP TABLE IF EXISTS movies;
CREATE TABLE IF NOT EXISTS movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  adult BOOLEAN NOT NULL,
  poster_path VARCHAR(255) NOT NULL,
  vertical_poster_path VARCHAR(255) NOT NULL,
  overview TEXT NOT NULL,
  genre_ids VARCHAR(255) NOT NULL,
  language VARCHAR(255) NOT NULL,
  release_date DATE NOT NULL,
  status ENUM('Trending', 'Ongoing', 'Upcoming', 'Archived') NOT NULL,
  
  PRIMARY KEY (id)
);

-- Genre table
DROP TABLE IF EXISTS genres;
CREATE TABLE IF NOT EXISTS genres (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  
  PRIMARY KEY (id)
);