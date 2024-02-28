// Configuração do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA-rc5TnhCwZf9ek7isghonfWRRk-LziBo",
    authDomain: "registrodeinteresseapz.firebaseapp.com",
    databaseURL: "https://registrodeinteresseapz-default-rtdb.firebaseio.com",
    projectId: "registrodeinteresseapz",
    storageBucket: "registrodeinteresseapz.appspot.com",
    messagingSenderId: "217616719554",
    appId: "1:217616719554:web:8c4d8c6d5499681289a55b"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar Firestore
var db = firebase.firestore();

document.getElementById('registrationForm').addEventListener('submit', function(event){
    event.preventDefault();
  
    // Capturando os valores do formulário
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var courses = [];
    document.querySelectorAll('input[name="course"]:checked').forEach((element) => {
        courses.push(element.value);
    });
    var learningInterest = document.querySelector('input[name="learningInterest"]:checked').value;
    var internshipInterest = document.querySelector('input[name="internshipInterest"]:checked').value;
  
    // Enviar os dados para o Firestore
    db.collection("submissions").add({
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        courses: courses,
        learningInterest: learningInterest,
        internshipInterest: internshipInterest
    })
    .then(function(docRef) {
        console.log("Documento escrito com ID: ", docRef.id);
        alert('Formulário enviado com sucesso!'); // Mensagem de sucesso
    })
    .catch(function(error) {
        console.error("Erro ao adicionar o documento: ", error);
        alert('Erro ao enviar o formulário. Por favor, tente novamente.'); // Mensagem de erro
    });
});
