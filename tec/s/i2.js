function validateForm() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const contact = document.getElementById('contact').value;
    const location = document.getElementById('location').value;
  
    if (name.trim() === '' || dob.trim() === '' || contact.trim() === '' || location.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return false;
    }
  
    // Verifica se a data de nascimento está no formato correto
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dob)) {
      alert('Por favor, insira uma data de nascimento válida no formato AAAA-MM-DD.');
      return false;
    }
  
    // Verifica se o contato está no formato correto
    const contactRegex = /^\d{10}$/; // Assume um número de telefone de 10 dígitos
    if (!contactRegex.test(contact)) {
      alert('Por favor, insira um número de contato válido.');
      return false;
    }
  
    document.getElementById('registrationForm').reset(); // Limpa o formulário após o envio
    document.getElementById('successMessage').classList.remove('hidden'); // Exibe a mensagem de sucesso
    setTimeout(function() {
      document.getElementById('successMessage').classList.add('hidden'); // Oculta a mensagem de sucesso após alguns segundos
    }, 3000); // 3000 milissegundos = 3 segundos
    return false; // Evita o envio real do formulário
  }