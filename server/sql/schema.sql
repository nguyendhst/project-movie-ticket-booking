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
  duration INT NOT NULL,
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

-- Timeslots
DROP TABLE IF EXISTS timeslots;
CREATE TABLE IF NOT EXISTS timeslots (
  id INT NOT NULL AUTO_INCREMENT,
  movie_id INT NOT NULL,
  start_time DATETIME NOT NULL,
  duration INT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  empty_seats INT NOT NULL,
  
  PRIMARY KEY (id)
);


INSERT INTO timeslots (movie_id, start_time, duration, price, empty_seats) VALUES (1, '2021-05-01 10:00:00', 120, 10.00, 100);

-- Ticket table
CREATE TABLE IF NOT EXISTS tickets (
  id INT NOT NULL AUTO_INCREMENT,
  movie_id INT NOT NULL,
  seat_number VARCHAR(255) NOT NULL,
  seat_row VARCHAR(255) NOT NULL,
  seat_type ENUM('Regular', 'VIP') NOT NULL,
  seat_price DECIMAL(10,2) NOT NULL,
  seat_status ENUM('Available', 'Reserved', 'Sold') NOT NULL,
  
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS activities (
  id INT NOT NULL AUTO_INCREMENT,
  names VARCHAR(255) NOT NULL,
  code VARCHAR(255) NOT NULL,
  start_time DATE NOT NULL,
  end_time DATE NOT NULL,
  received DECIMAL(10,2) NOT NULL,
  spend DECIMAL(10,2) NOT NULL,
  kpi DECIMAL(10,2) NOT NULL,
  descriptions VARCHAR(255) NOT NULL,
  
  PRIMARY KEY (id)
);
