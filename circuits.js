document.addEventListener('DOMContentLoaded', function () {
    // Exemple de données de circuits
    const circuits = [
        {
            id: 1,
            nom: 'Circuit 1',
            description: 'Description du Circuit 1',
            lieu: 'Lieu 1',
            dateDebut: '2024-05-01',
            dateFin: '2024-05-10',
            tarif: 100,
            image: 'assets/img/circuit1.jpg'
        },
        {
            id: 2,
            nom: 'Circuit 2',
            description: 'Description du Circuit 2',
            lieu: 'Lieu 2',
            dateDebut: '2024-06-01',
            dateFin: '2024-06-10',
            tarif: 200,
            image: 'assets/img/circuit2.jpg'
        }
        // Ajoutez plus de circuits ici
    ];

    const circuitGrid = document.getElementById('circuitGrid');

    circuits.forEach(circuit => {
        const card = document.createElement('div');
        card.className = 'circuit-card';

        card.innerHTML = `
            <img src="${circuit.image}" alt="${circuit.nom}">
            <div class="circuit-card-content">
                <h2>${circuit.nom}</h2>
                <p>${circuit.description}</p>
                <span>Lieu: ${circuit.lieu}</span>
                <span>Date de début: ${circuit.dateDebut}</span>
                <span>Date de fin: ${circuit.dateFin}</span>
                <span>Tarif: ${circuit.tarif} €</span>
            </div>
        `;

        circuitGrid.appendChild(card);
    });
});