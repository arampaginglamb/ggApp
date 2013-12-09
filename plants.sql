## build plant list
## for mySQL
## Corbin Combs

DROP TABLE IF EXISTS plantList;
CREATE TABLE plantList (
	id INT PRIMARY KEY,
	plantName VARCHAR(15),
	description VARCHAR (200),
	imgLoc VARCHAR(200),
	imgWidth INT,
	imgHeight INT,
	potSize VARCHAR(20)

  
);

INSERT INTO plantList
VALUES (
  0, 'Petunia', 'This is the description for a petunia', 'http://cs.iupui.edu/~corcombs/n300/GarysGreenhouseApp/petunia.jpg', 55,55,'4", 10"'
  ),(  1, 'Begonia', 'This is the description for a begonia', 'http://cs.iupui.edu/~corcombs/n300/GarysGreenhouseApp/begonia.jpg', 55,55,'4", 10"'
  );

