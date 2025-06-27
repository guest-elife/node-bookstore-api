async function getAvailableBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        return response.data; // Assurez-vous que la structure de la réponse est correcte
    } catch (error) {
        console.error('Erreur lors de la récupération des livres:', error);
        throw error; // Lancer l'erreur pour la gestion ultérieure
    }
}

async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/books/${isbn}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération du livre par ISBN:', error);
        throw error;
    }
}

async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/books?author=${encodeURIComponent(author)}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des livres par auteur:', error);
        throw error;
    }
}

async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/books?title=${encodeURIComponent(title)}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des livres par titre:', error);
        throw error;
    }
}

async function getBookReview(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/books/${isbn}/reviews`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de la critique du livre:', error);
        throw error;
    }
}

async function registerUser (userData) {
    try {
        const response = await axios.post(`${BASE_URL}/users`, userData);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
        throw error;
    }
}

async function loginUser (credentials) {
    try {
        const response = await axios.post(`${BASE_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la connexion de l\'utilisateur:', error);
        throw error;
    }
}

async function addOrUpdateReview(isbn, reviewData) {
    try {
        const response = await axios.post(`${BASE_URL}/books/${isbn}/reviews`, reviewData);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout ou de la modification de la critique:', error);
        throw error;
    }
}

async function deleteReview(isbn, reviewId) {
    try {
        const response = await axios.delete(`${BASE_URL}/books/${isbn}/reviews/${reviewId}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la suppression de la critique:', error);
        throw error;
    }
} 

function getAllBooks(callback) {
    getAvailableBooks()
        .then(callback)
        .catch(error => console.error('Erreur dans getAllBooks:', error));
}
 
function searchByISBN(isbn) {
    return getBookByISBN(isbn)
        .then(data => data)
        .catch(error => console.error('Erreur dans searchByISBN:', error));
}

function searchByAuthor(author) {
    return getBooksByAuthor(author)
        .then(data => data)
        .catch(error => console.error('Erreur dans searchByAuthor:', error));
}

function searchByTitle(title) {
    return getBooksByTitle(title)
        .then(data => data)
        .catch(error => console.error('Erreur dans searchByTitle:', error));
}



