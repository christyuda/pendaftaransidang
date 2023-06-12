const apiUrl = 'https://api.github.com/repos/{owner}/{repo}/contents';
const token = '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';

const createFile = async (owner, repo, path, content, message) => {
  const fileContent = btoa(content); // Mengenkripsi konten menggunakan Base64

  const url = apiUrl.replace('{owner}', owner).replace('{repo}', repo);

  // Membuat objek konfigurasi untuk permintaan
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      path: path,
      message: message,
      content: fileContent
    })
  };

  try {
    const response = await fetch(url, requestOptions);
    if (response.ok) {
      const data = await response.json();
      console.log('Berkas berhasil dibuat:', data);
    } else {
      console.error('Gagal membuat berkas:', response.statusText);
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
};

// Contoh penggunaan
const owner = 'christyuda';
const repo = 'pendaftaransidang';
const path = 'path/ke/berkas.txt';
const content = 'Ini adalah isi berkas.';
const message = 'Menambahkan berkas baru';
createFile(owner, repo, path, content, message);
