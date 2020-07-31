<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200731090212 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE command (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, adress_id INT NOT NULL, shipping_cost_id INT NOT NULL, reduction_id INT NOT NULL, payment_id INT NOT NULL, command_number VARCHAR(255) NOT NULL, weight DOUBLE PRECISION NOT NULL, total_price DOUBLE PRECISION NOT NULL, status VARCHAR(255) NOT NULL, INDEX IDX_8ECAEAD4A76ED395 (user_id), INDEX IDX_8ECAEAD48486F9AC (adress_id), INDEX IDX_8ECAEAD4FBF783BB (shipping_cost_id), INDEX IDX_8ECAEAD4C03CB092 (reduction_id), INDEX IDX_8ECAEAD44C3A3BB (payment_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE command ADD CONSTRAINT FK_8ECAEAD4A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE command ADD CONSTRAINT FK_8ECAEAD48486F9AC FOREIGN KEY (adress_id) REFERENCES adress (id)');
        $this->addSql('ALTER TABLE command ADD CONSTRAINT FK_8ECAEAD4FBF783BB FOREIGN KEY (shipping_cost_id) REFERENCES shipping_cost (id)');
        $this->addSql('ALTER TABLE command ADD CONSTRAINT FK_8ECAEAD4C03CB092 FOREIGN KEY (reduction_id) REFERENCES reduction (id)');
        $this->addSql('ALTER TABLE command ADD CONSTRAINT FK_8ECAEAD44C3A3BB FOREIGN KEY (payment_id) REFERENCES credit_card (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE command');
    }
}
