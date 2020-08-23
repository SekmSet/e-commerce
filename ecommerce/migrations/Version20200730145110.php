<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200730145110 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE credit_card (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, typecard VARCHAR(255) NOT NULL, numbercard VARCHAR(255) NOT NULL, dateexp DATE NOT NULL, cvv INT NOT NULL, INDEX IDX_11D627EEA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE credit_card ADD CONSTRAINT FK_11D627EEA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE adress DROP FOREIGN KEY FK_5CECC7BE79F37AE5');
        $this->addSql('DROP INDEX idx_5cecc7be79f37ae5 ON adress');
        $this->addSql('CREATE INDEX IDX_5CECC7BEA76ED395 ON adress (user_id)');
        $this->addSql('ALTER TABLE adress ADD CONSTRAINT FK_5CECC7BE79F37AE5 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE shipping_cost CHANGE prices prices INT NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE credit_card');
        $this->addSql('ALTER TABLE adress DROP FOREIGN KEY FK_5CECC7BEA76ED395');
        $this->addSql('DROP INDEX idx_5cecc7bea76ed395 ON adress');
        $this->addSql('CREATE INDEX IDX_5CECC7BE79F37AE5 ON adress (user_id)');
        $this->addSql('ALTER TABLE adress ADD CONSTRAINT FK_5CECC7BEA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE shipping_cost CHANGE prices prices VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
