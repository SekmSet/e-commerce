<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200729142432 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
//        $this->addSql('CREATE TABLE avis (id INT AUTO_INCREMENT NOT NULL, article_id INT NOT NULL, user_id INT NOT NULL, note INT NOT NULL, comment VARCHAR(255) DEFAULT NULL, INDEX IDX_8F91ABF07294869C (article_id), INDEX IDX_8F91ABF0A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
//        $this->addSql('ALTER TABLE avis ADD CONSTRAINT FK_8F91ABF07294869C FOREIGN KEY (article_id) REFERENCES article (id)');
//        $this->addSql('ALTER TABLE avis ADD CONSTRAINT FK_8F91ABF0A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
//        $this->addSql('ALTER TABLE adress DROP FOREIGN KEY FK_5CECC7BE79F37AE5');
//        $this->addSql('DROP INDEX idx_5cecc7be79f37ae5 ON adress');
//        $this->addSql('CREATE INDEX IDX_5CECC7BEA76ED395 ON adress (user_id)');
//        $this->addSql('ALTER TABLE adress ADD CONSTRAINT FK_5CECC7BE79F37AE5 FOREIGN KEY (user_id) REFERENCES user (id)');
//        $this->addSql('ALTER TABLE reduction CHANGE percentage percentage INT NOT NULL, CHANGE coded code VARCHAR(255) NOT NULL');
//        $this->addSql('ALTER TABLE shipping_cost CHANGE prices prices INT NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
//        $this->addSql('DROP TABLE avis');
//        $this->addSql('ALTER TABLE adress DROP FOREIGN KEY FK_5CECC7BEA76ED395');
//        $this->addSql('DROP INDEX idx_5cecc7bea76ed395 ON adress');
//        $this->addSql('CREATE INDEX IDX_5CECC7BE79F37AE5 ON adress (user_id)');
//        $this->addSql('ALTER TABLE adress ADD CONSTRAINT FK_5CECC7BEA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
//        $this->addSql('ALTER TABLE reduction CHANGE percentage percentage VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE code coded VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
//        $this->addSql('ALTER TABLE shipping_cost CHANGE prices prices VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
