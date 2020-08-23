<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200730091949 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
//        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, surname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, role VARCHAR(255) NOT NULL, phone VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
//        $this->addSql('CREATE TABLE adress (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, street VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, postal_c INT NOT NULL, country VARCHAR(255) NOT NULL, INDEX IDX_5CECC7BEA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
//        $this->addSql('CREATE TABLE article (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, color VARCHAR(255) NOT NULL, price VARCHAR(255) NOT NULL, images VARCHAR(255) NOT NULL, average_grades VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE basket (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, product VARCHAR(255) NOT NULL, total_price INT NOT NULL, UNIQUE INDEX UNIQ_2246507BA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
//        $this->addSql('CREATE TABLE reduction (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, percentage INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
//        $this->addSql('CREATE TABLE shipping_cost (id INT AUTO_INCREMENT NOT NULL, carrier VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, weight VARCHAR(255) NOT NULL, prices INT NOT NULL, free VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
//        $this->addSql('ALTER TABLE adress ADD CONSTRAINT FK_5CECC7BEA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE basket ADD CONSTRAINT FK_2246507BA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
//        $this->addSql('DROP TABLE user');
//        $this->addSql('DROP TABLE adress');
//        $this->addSql('DROP TABLE article');
        $this->addSql('DROP TABLE basket');
//        $this->addSql('DROP TABLE reduction');
//        $this->addSql('DROP TABLE shipping_cost');
//        $this->addSql('ALTER TABLE adress DROP FOREIGN KEY FK_5CECC7BEA76ED395');
        $this->addSql('ALTER TABLE basket DROP FOREIGN KEY FK_2246507BA76ED395');
    }
}
