const fs = require('fs');

// HWID a ser adicionada
const hwid = 'EXEMPLO_HWID';

// Caminho do arquivo onde a HWID será adicionada
const filePath = 'caminho/do/arquivo.txt';

// Adicionar a HWID no arquivo
fs.appendFile(filePath, hwid + '\n', (err) => {
  if (err) {
    console.error('Erro ao adicionar a HWID:', err);
    process.exit(1);
  }

  console.log('HWID adicionada com sucesso:', hwid);
});
