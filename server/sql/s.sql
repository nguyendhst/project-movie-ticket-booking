-- MySQL 8.0 
-- Movie Database Schema
-- Serverless DB: PlanetScale

-- Create the database
CREATE DATABASE IF NOT EXISTS movie_db;

-- Use the database
USE movie_db;

-- Create the table
CREATE TABLE IF NOT EXISTS movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  adult BOOLEAN NOT NULL,
  poster_path VARCHAR(255) NOT NULL,
  overview TEXT NOT NULL,
  genre_ids VARCHAR(255) NOT NULL,
  language VARCHAR(255) NOT NULL,
  release_date DATE NOT NULL,
  
  PRIMARY KEY (id)
);


-- Genre table
CREATE TABLE IF NOT EXISTS genres (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  
  PRIMARY KEY (id)
);
-- Insert some data

INSERT INTO movies (title, adult, poster_path, overview, genre_ids, language, release_date) VALUES
('Fight Club', 0, '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg', '"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion."', 
'18;53;35', 'en', '1999-10-15');
