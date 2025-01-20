import React, { useState } from 'react';
import './App.css';

const calculateFrequency = (text) => {
  const frequency = {};
  for (const char of text) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
};

const buildHuffmanTree = (frequency) => {
  const nodes = Object.entries(frequency).map(([char, freq]) => ({
    char,
    freq,
    left: null,
    right: null,
  }));

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);
    const left = nodes.shift();
    const right = nodes.shift();

    nodes.push({
      char: null,
      freq: left.freq + right.freq,
      left,
      right,
    });
  }

  return nodes[0];
};

// Geração do mapa de códigos de Huffman
const generateCodes = (node, prefix = '', codes = {}) => {
  if (!node) return codes;

  if (node.char !== null) {
    codes[node.char] = prefix;
  }

  generateCodes(node.left, prefix + '0', codes);
  generateCodes(node.right, prefix + '1', codes);

  return codes;
};

// Criptografia do texto com os códigos de Huffman
const encodeText = (text, codes) => {
  return text.split('').map((char) => codes[char]).join('');
};

const HuffmanTree = ({ node }) => {
  if (!node) return null;

  return (
    <div className="tree-node">
      {node.char ? (
        <div>
          <strong>Char:</strong> {node.char} (<strong>Freq:</strong> {node.freq})
        </div>
      ) : (
        <div>
          <strong>Freq:</strong> {node.freq}
        </div>
      )}
      <div className="tree-container">
        <HuffmanTree node={node.left} />
        <HuffmanTree node={node.right} />
      </div>
    </div>
  );
};


const App = () => {
  const [inputText, setInputText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [huffmanTree, setHuffmanTree] = useState(null);
  const [huffmanCodes, setHuffmanCodes] = useState({});

  const handleEncrypt = () => {
    if (!inputText) return;

    const frequency = calculateFrequency(inputText);
    const tree = buildHuffmanTree(frequency);
    const codes = generateCodes(tree);
    const encoded = encodeText(inputText, codes);

    setHuffmanTree(tree);
    setHuffmanCodes(codes);
    setEncodedText(encoded);
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Huffman Encoding</h1>
      <div>
        <input
          type="text"
          placeholder="Digite uma palavra"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleEncrypt}>Criptografar</button>
      </div>

      {encodedText && (
        <div>
          <h2>Texto Criptografado</h2>
          <p>{encodedText}</p>
        </div>
      )}

      {huffmanTree && (
        <div>
          <h2>Árvore de Huffman</h2>
          <HuffmanTree node={huffmanTree} />
        </div>
      )}

      {Object.keys(huffmanCodes).length > 0 && (
        <div>
          <h2>Códigos de Huffman</h2>
          <ul>
            {Object.entries(huffmanCodes).map(([char, code]) => (
              <li key={char}>
                <strong>{char}:</strong> {code}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
