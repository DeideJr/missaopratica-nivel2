new Vue({
    el: '#usuarios',
    data: {
        users: [] // Inicialmente, o vetor de usuários está vazio
    },
    mounted() {
        this.loadUsers(); // Carrega os usuários quando a página é montada
    },
    methods: {
        loadUsers() {
            // Use o Fetch API para fazer a solicitação à API
            fetch('https://reqres.in/api/users?per_page=10')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro na solicitação');
                    }
                    return response.json();
                })
                .then(data => {
                    this.users = data.data;
                })
                .catch(error => {
                    console.error('Erro ao carregar os usuários:', error);
                });
        }
    }
});