import { useState } from "react"

export default function PlantList() {
    // vad är en planta för datatyp
    const [plant, setPlant] = useState<string>("");
    // vad är listan för datatyp och vilka datatyper innehåller objekten i listan
    const [plants, setPlants] = useState<string[]>(["Monstera Deliciosa", "Echeveria Green Prince"]);
    return (
        <section>
            <h3>Plants:</h3>
            <ul>
                {
                    plants.map((plant, i) => (
                        <li key={i}>{plant}</li>
                    ))
                }
            </ul>
        </section>
    )
}