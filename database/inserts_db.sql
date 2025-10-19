/* -- Populando a tabela de usuários (clients) -- */

INSERT INTO users (name, email, role, password_hash) VALUES
('Alice Souza', 'alice.souza@email.com', 'cliente', '$2b$10$abcdefghijk1234567890'), 
('Bruno Lima', 'bruno.lima@email.com', 'cliente', '$2b$10$abcdefghijk1234567890'),
('Carla Mendes', 'carla.mendes@email.com', 'cliente', '$2b$10$abcdefghijk1234567890'),
('Admin Geral', 'admin@empresa.com', 'admin', '$2b$10$abcdefghijk1234567890');

/* -- Populando a tabela de eventos -- */

INSERT INTO event_ (userId, eventName, eventDate) VALUES
(1, 'Casamento Alice & João', '2025-06-20'),
(1, 'Aniversário 30 anos Alice', '2025-09-10'),
(2, 'Festa Corporativa BrunoTech', '2025-07-15'),
(3, 'Batizado do Filho de Carla', '2025-08-05');

/* -- Populando a tabela de fotos com imagens -- */

-- Fotos do Casamento Alice & João
INSERT INTO photos (originalName, fileName, path, eventId) VALUES
('cerimonia.jpg', 'cerimonia_001.jpg', 'https://images.unsplash.com/photo-1508571665407-5f6f2b7a45f3', 1),
('recepcao.jpg', 'recepcao_002.jpg', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1', 1),
('primeira_danca.jpg', 'primeira_danca_003.jpg', 'https://images.unsplash.com/photo-1517841905240-472988babdf9', 1);

-- Fotos do Aniversário 30 anos Alice
INSERT INTO photos (originalName, fileName, path, eventId) VALUES
('bolo.jpg', 'bolo_001.jpg', 'https://images.unsplash.com/photo-1527515637460-354fbb26f7d7', 2),
('decoracao.jpg', 'decoracao_002.jpg', 'https://images.unsplash.com/photo-1518133910546-b6c2fb0b1a5f', 2),
('convidados.jpg', 'convidados_003.jpg', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e', 2);

-- Fotos da Festa Corporativa BrunoTech
INSERT INTO photos (originalName, fileName, path, eventId) VALUES
('auditório.jpg', 'auditorio_001.jpg', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df', 3),
('palestra.jpg', 'palestra_002.jpg', 'https://images.unsplash.com/photo-1581091012184-97c3c69a54de', 3),
('coquetel.jpg', 'coquetel_003.jpg', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', 3);

-- Fotos do Batizado do Filho de Carla
INSERT INTO photos (originalName, fileName, path, eventId) VALUES
('igreja.jpg', 'igreja_001.jpg', 'https://images.unsplash.com/photo-1516375195441-2a2a2f1c5a1d', 4),
('cerimonia_batismo.jpg', 'cerimonia_002.jpg', 'https://images.unsplash.com/photo-1529253355930-8a991beffdb4', 4),
('familia.jpg', 'familia_003.jpg', 'https://images.unsplash.com/photo-1505238680356-667803448bb6', 4);
