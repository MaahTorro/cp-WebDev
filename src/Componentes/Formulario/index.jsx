function Formulario() {
    return (
      <section id="contact">
        <form>
          <input type="text" placeholder="Nome" className="inputText"/>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensagem" />
          <button type="submit">Enviar</button>
        </form>
      </section>
    );
  }
  
  export default Formulario