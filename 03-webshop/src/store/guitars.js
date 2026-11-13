import { ref } from 'vue'

const guitars = ref([])

export function useGuitarStore(){
    async function fetchGuitars() {
        try {
            const response = await fetch('http://localhost:3001/guitars')
            if (!response.ok) {
                throw new Error('Failed to fetch guitars')
            }
            guitars.value = await response.json()
        } catch (error) {
            console.error('Error fetching guitars:', error)
        }
    }

    return {
        guitars,
        fetchGuitars
    }
}
