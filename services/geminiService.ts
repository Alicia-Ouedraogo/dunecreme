
import { GoogleGenAI } from "@google/genai";

/**
 * Service pour obtenir des conseils pâtissiers via l'IA.
 * Note: L'API_KEY doit être configurée dans l'environnement.
 */
export async function getPatiRitualAdvice(query: string): Promise<string> {
  const apiKey = process.env.API_KEY;
  
  // Sécurité si la clé est absente
  if (!apiKey) {
    console.warn("API_KEY non configurée pour Gemini.");
    return "Notre Chef Pâtissier Digital est en train de préparer une nouvelle collection. Revenez dans un instant !";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Tu es le 'Chef Pâtissier Digital' de 'DUNE & CRÈME' à Rabat.
      L'établissement est dirigé par la Cheffe Meryem, formée aux codes de la pâtisserie française d'exception.
      
      CONTEXTE :
      - Spécialité : Bento cakes sur-mesure (gâteaux minimalistes et esthétiques).
      - Offre : Brunch premium, coffee bar, créations artisanales.
      - Service : Click & Collect à Rabat exclusivement.
      
      TON :
      Chaleureux, expert, très gourmand, premium et concis.
      
      DEMANDE CLIENT : "${query}"
      
      CONSIGNES :
      1. Réponds en moins de 60 mots.
      2. Utilise un vocabulaire raffiné (ganache, pochage, équilibre, textures).
      3. Encourage subtilement la commande personnalisée.`,
      config: {
        temperature: 0.8,
        topK: 40,
        topP: 0.95,
      }
    });

    return response.text || "Puis-je vous accompagner dans le choix de votre prochain bento cake signature ?";
  } catch (error) {
    console.error("Erreur Gemini Service:", error);
    return "Une légère brise de sucre perturbe nos communications. Venez nous voir à l'atelier de Rabat !";
  }
}
