
  document.getElementById('form-rafael').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = this.querySelector('#nome').value.trim();
    const horarioSelect = this.querySelector('#horario');
    const horario = horarioSelect.value;
    const servSelect = this.querySelector('#serv');
    const serv = servSelect.options[servSelect.selectedIndex].text;
    
    if (!nome || !horario || !servSelect.value) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    alert(`Reserva Confirmada!\nBarbeiro: Rafael Cortez\nCliente: ${nome}\nHorário: ${horario}\nServiço: ${serv}\n\nEsperamos por você!`);

    // Remove o horário selecionado para que ele não apareça mais
    horarioSelect.querySelector(`option[value="${horario}"]`).remove();

    // Reseta o formulário
    this.reset();
  });
  document.getElementById('form-Leandro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = this.querySelector('#nome').value.trim();
    const horarioSelect = this.querySelector('#horario');
    const horario = horarioSelect.value;
    const servSelect = this.querySelector('#serv');
    const serv = servSelect.options[servSelect.selectedIndex].text;

    if (!nome || !horario || !servSelect.value) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    alert(`Reserva Confirmada!\nBarbeiro: Leandro Navarro\nCliente: ${nome}\nHorário: ${horario}\nServiço: ${serv}\n\nEsperamos por você!`);

    // Remove o horário selecionado para que ele não apareça mais
    horarioSelect.querySelector(`option[value="${horario}"]`).remove();

    // Reseta o formulário
    this.reset();
  });
    document.getElementById('form-Diego').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = this.querySelector('#nome').value.trim();
    const horarioSelect = this.querySelector('#horario');
    const horario = horarioSelect.value;
    const servSelect = this.querySelector('#serv');
    const serv = servSelect.options[servSelect.selectedIndex].text;

    if (!nome || !horario || !servSelect.value) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    alert(`Reserva Confirmada!\nBarbeiro: Diego Firmeza\nCliente: ${nome}\nHorário: ${horario}\nServiço: ${serv}\n\nEsperamos por você!`);

    // Remove o horário selecionado para que ele não apareça mais
    horarioSelect.querySelector(`option[value="${horario}"]`).remove();

    // Reseta o formulário
    this.reset();
  });
    document.getElementById('form-Bruno').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = this.querySelector('#nome').value.trim();
    const horarioSelect = this.querySelector('#horario');
    const horario = horarioSelect.value;
    const servSelect = this.querySelector('#serv');
    const serv = servSelect.options[servSelect.selectedIndex].text;

    if (!nome || !horario || !servSelect.value) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    alert(`Reserva Confirmada!\nBarbeiro: Bruno Spaço\nCliente: ${nome}\nHorário: ${horario}\nServiço: ${serv}\n\nEsperamos por você!`);

    // Remove o horário selecionado para que ele não apareça mais
    horarioSelect.querySelector(`option[value="${horario}"]`).remove();

    // Reseta o formulário
    this.reset();
  });

    document.getElementById('form-Lucas').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = this.querySelector('#nome').value.trim();
    const horarioSelect = this.querySelector('#horario');
    const horario = horarioSelect.value;
    const servSelect = this.querySelector('#serv');
    const serv = servSelect.options[servSelect.selectedIndex].text;

    if (!nome || !horario || !servSelect.value) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    alert(`Reserva Confirmada!\nBarbeiro: Lucas Linhas\nCliente: ${nome}\nHorário: ${horario}\nServiço: ${serv}\n\nEsperamos por você!`);

    // Remove o horário selecionado para que ele não apareça mais
    horarioSelect.querySelector(`option[value="${horario}"]`).remove();

    // Reseta o formulário
    this.reset();
  });


