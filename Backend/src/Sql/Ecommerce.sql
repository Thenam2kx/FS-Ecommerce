CREATE TABLE `Role` (
  `RoleID` int PRIMARY KEY AUTO_INCREMENT,
  `RoleName` varchar(20) NOT NULL
);

CREATE TABLE `Users` (
  `UserID` int PRIMARY KEY AUTO_INCREMENT,
  `RoleID` int DEFAULT 0,
  `FullName` varchar(50) NOT NULL,
  `Username` varchar(50) UNIQUE NOT NULL,
  `Email` varchar(50) UNIQUE NOT NULL,
  `Phone` varchar(13) UNIQUE,
  `Gender` bit DEFAULT 0,
  `Password` varchar(255) NOT NULL,
  `Status` bit DEFAULT 0,
  `Thumbnail` varchar(255),
  `CreatedAt` timestamp DEFAULT (now()),
  `UpdatedAt` timestamp DEFAULT (now()),
  `Deleted` bit DEFAULT 0
);

CREATE TABLE `BillingInfo` (
  `BillingID` int PRIMARY KEY AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `CreatedAt` timestamp DEFAULT (now()),
  `UpdatedAt` timestamp DEFAULT (now())
);

CREATE TABLE `ViewedPrd` (
  `ViewedPrdID` int PRIMARY KEY AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `ProductID` int NOT NULL,
  `CreatedAt` timestamp DEFAULT (now())
);

CREATE TABLE `Supplier` (
  `SupplierID` int PRIMARY KEY AUTO_INCREMENT,
  `Fullname` varchar(50) NOT NULL,
  `City` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone` varchar(12) NOT NULL,
  `TotalRate` int,
  `Followers` int,
  `ChatFeedback` int,
  `JoinDate` timestamp NOT NULL DEFAULT (now()),
  `Thumbnail` varchar(255),
  `Desc` longtext,
  `Status` bit DEFAULT 0
);

CREATE TABLE `Products` (
  `ProductID` int PRIMARY KEY AUTO_INCREMENT,
  `CategoryID` int NOT NULL,
  `SupplierID` int NOT NULL,
  `ProductName` varchar(255) NOT NULL,
  `Brand` varchar(50) DEFAULT 'No Brand',
  `UnitPrice` int NOT NULL,
  `UnitInStock` int NOT NULL,
  `Sold` int NOT NULL,
  `CreatedAt` timestamp DEFAULT (now()),
  `UpdatedAt` timestamp DEFAULT (now()),
  `Viewrs` int,
  `Description` longtext,
  `Deleted` bit DEFAULT 0
);

CREATE TABLE `Coupons` (
  `CouponID` int PRIMARY KEY AUTO_INCREMENT,
  `Code` varchar(50) UNIQUE NOT NULL,
  `Discount` decimal(10,2),
  `ExpiryDate` date,
  `CreatedAt` timestamp DEFAULT (now()),
  `UpdatedAt` timestamp DEFAULT (now())
);

CREATE TABLE `UserCoupons` (
  `UserCouponId` int PRIMARY KEY AUTO_INCREMENT,
  `UserID` int,
  `CouponID` int,
  `Used` boolean DEFAULT false,
  `CreatedAt` timestamp DEFAULT (now()),
  `UpdatedAt` timestamp DEFAULT (now())
);

CREATE TABLE `FavoriteProduct` (
  `FavID` int PRIMARY KEY AUTO_INCREMENT,
  `ProductID` int NOT NULL,
  `UserID` int NOT NULL,
  `CreatedAt` timestamp DEFAULT (now())
);

CREATE TABLE `Discount` (
  `DiscountID` int PRIMARY KEY AUTO_INCREMENT,
  `ProductID` int NOT NULL,
  `DisPrice` int NOT NULL,
  `CreatedAt` timestamp DEFAULT (now()),
  `UpdatedAt` timestamp DEFAULT (now())
);

CREATE TABLE `Category` (
  `CategoryID` int PRIMARY KEY AUTO_INCREMENT,
  `CategoryName` varchar(50) NOT NULL,
  `Thumbnail` varchar(255),
  `Description` varchar(255)
);

CREATE TABLE `Reviews` (
  `ReviewsID` int PRIMARY KEY AUTO_INCREMENT,
  `ProductID` int NOT NULL,
  `UserID` int NOT NULL,
  `Star` int NOT NULL,
  `Riviews` varchar(500),
  `CreatedAt` timestamp DEFAULT (now())
);

CREATE TABLE `Images` (
  `ImageID` int PRIMARY KEY AUTO_INCREMENT,
  `ProductID` int NOT NULL,
  `Thumbnail` varchar(255) NOT NULL
);

CREATE TABLE `Order` (
  `OrderID` int PRIMARY KEY AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `Address` varchar(150) NOT NULL,
  `ShippingFee` int NOT NULL,
  `OrderAt` timestamp NOT NULL DEFAULT (now()),
  `ShippedDate` date NOT NULL,
  `RequiredDate` date NOT NULL,
  `Status` VARCHAR(20) NOT NULL COMMENT 'paid / pending / cancelled',
  `Message` varchar(255),
  `CreatedAt` timestamp DEFAULT (now()),
  `UpdatedAt` timestamp DEFAULT (now())
);

CREATE TABLE `OrderDetail` (
  `OrderDetailID` int PRIMARY KEY AUTO_INCREMENT,
  `OrderID` int NOT NULL,
  `ProductID` int NOT NULL,
  `Quantity` int NOT NULL,
  `UnitPrice` int NOT NULL,
  `Discount` int,
  `CreatedAt` timestamp DEFAULT (now()),
  `UpdatedAt` timestamp DEFAULT (now())
);

CREATE TABLE `Cart` (
  `CartID` int PRIMARY KEY AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `CreatedAt` timestamp DEFAULT (now()),
  `UpdatedAt` timestamp DEFAULT (now())
);

CREATE TABLE `CartDetail` (
  `CartDetailID` int PRIMARY KEY AUTO_INCREMENT,
  `CartID` int NOT NULL,
  `ProductID` int NOT NULL,
  `Quantity` int NOT NULL,
  `CreatedAt` timestamp DEFAULT (now()),
  `UpdatedAt` timestamp DEFAULT (now())
);

CREATE TABLE `Invoices` (
  `InvoicesID` int PRIMARY KEY AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `CreatedAt` timestamp DEFAULT (now()),
  `UpdatedAt` timestamp DEFAULT (now()),
  `TotalAmount` int NOT NULL,
  `Status` VARCHAR(20) NOT NULL COMMENT 'paid / pending / cancelled'
);

CREATE TABLE `InvoiceDetail` (
  `InvoiceDetailID` int PRIMARY KEY AUTO_INCREMENT,
  `InvoicesID` int NOT NULL,
  `ProductID` int NOT NULL,
  `Quantity` int NOT NULL,
  `UnitPrice` int NOT NULL,
  `TotalPrice` int NOT NULL,
  `CreatedAt` timestamp DEFAULT (now()),
  `UpdatedAt` timestamp DEFAULT (now())
);

ALTER TABLE `UserCoupons` ADD FOREIGN KEY (`UserID`) REFERENCES `Users` (`UserID`);

ALTER TABLE `UserCoupons` ADD FOREIGN KEY (`CouponID`) REFERENCES `Coupons` (`CouponID`);

ALTER TABLE `Discount` ADD FOREIGN KEY (`ProductID`) REFERENCES `Products` (`ProductID`);

ALTER TABLE `Images` ADD FOREIGN KEY (`ProductID`) REFERENCES `Products` (`ProductID`);

ALTER TABLE `Products` ADD FOREIGN KEY (`CategoryID`) REFERENCES `Category` (`CategoryID`);

ALTER TABLE `Products` ADD FOREIGN KEY (`SupplierID`) REFERENCES `Supplier` (`SupplierID`);

ALTER TABLE `BillingInfo` ADD FOREIGN KEY (`UserID`) REFERENCES `Users` (`UserID`);

ALTER TABLE `Users` ADD FOREIGN KEY (`RoleID`) REFERENCES `Role` (`RoleID`);

ALTER TABLE `Cart` ADD FOREIGN KEY (`UserID`) REFERENCES `Users` (`UserID`);

ALTER TABLE `CartDetail` ADD FOREIGN KEY (`CartID`) REFERENCES `Cart` (`CartID`);

ALTER TABLE `Order` ADD FOREIGN KEY (`UserID`) REFERENCES `Users` (`UserID`);

ALTER TABLE `OrderDetail` ADD FOREIGN KEY (`OrderID`) REFERENCES `Order` (`OrderID`);

ALTER TABLE `FavoriteProduct` ADD FOREIGN KEY (`UserID`) REFERENCES `Users` (`UserID`);

ALTER TABLE `ViewedPrd` ADD FOREIGN KEY (`UserID`) REFERENCES `Users` (`UserID`);

ALTER TABLE `Reviews` ADD FOREIGN KEY (`UserID`) REFERENCES `Users` (`UserID`);

ALTER TABLE `Invoices` ADD FOREIGN KEY (`UserID`) REFERENCES `Users` (`UserID`);

ALTER TABLE `InvoiceDetail` ADD FOREIGN KEY (`InvoicesID`) REFERENCES `Invoices` (`InvoicesID`);

ALTER TABLE `InvoiceDetail` ADD FOREIGN KEY (`ProductID`) REFERENCES `Products` (`ProductID`);

ALTER TABLE `OrderDetail` ADD FOREIGN KEY (`ProductID`) REFERENCES `Products` (`ProductID`);

ALTER TABLE `CartDetail` ADD FOREIGN KEY (`ProductID`) REFERENCES `Products` (`ProductID`);

ALTER TABLE `Reviews` ADD FOREIGN KEY (`ProductID`) REFERENCES `Products` (`ProductID`);

ALTER TABLE `Products` ADD FOREIGN KEY (`ProductID`) REFERENCES `FavoriteProduct` (`ProductID`);

ALTER TABLE `Products` ADD FOREIGN KEY (`ProductID`) REFERENCES `ViewedPrd` (`ProductID`);
