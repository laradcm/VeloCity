create table stations (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	neighborhood VARCHAR(50) NOT NULL,
	name VARCHAR(50) NOT NULL,
	capacity INT NOT NULL,
	available_bicycles INT NOT NULL,
  CONSTRAINT capacity_not_smaller_than_stock
    CHECK(available_bicycles <= capacity)
);
create table bicycles (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	station_id INT,
	status VARCHAR(14) NOT NULL,
	condition VARCHAR(4) NOT NULL,
  CONSTRAINT station_id_when_available 
    CHECK( status <> 'Available' OR station_id IS NOT NULL ),
  CONSTRAINT fk_stations
    FOREIGN KEY(station_id)
      REFERENCES stations(id)
);
create table users (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	phone VARCHAR(50) NOT NULL,
	role VARCHAR(5) NOT NULL,
	address VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL
);
create table maintenance (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id INT NOT NULL,
	bicycle_id INT NOT NULL,
	ticket VARCHAR(50) NOT NULL,
	description TEXT,
	status VARCHAR(11) NOT NULL,
	time_reported DATE NOT NULL,
	time_resolved VARCHAR(50),
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
      REFERENCES users(id),
  CONSTRAINT fk_bicycles
    FOREIGN KEY(bicycle_id)
      REFERENCES bicycles(id)
);
create table ride_sessions (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	bicycle_id INT NOT NULL,
	user_id INT NOT NULL,
	origin_station INT NOT NULL,
	return_station INT,
	start_time TIMESTAMP NOT NULL,
	arrival_time TIMESTAMP,
	ticket VARCHAR(50) NOT NULL,
	returned_successfully BOOLEAN NOT NULL,
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
      REFERENCES users(id),
  CONSTRAINT fk_bicycles
    FOREIGN KEY(bicycle_id)
      REFERENCES bicycles(id),
  CONSTRAINT fk_origin_stations
    FOREIGN KEY(origin_station)
      REFERENCES stations(id),
  CONSTRAINT fk_return_stations
    FOREIGN KEY(return_station)
      REFERENCES stations(id)
);