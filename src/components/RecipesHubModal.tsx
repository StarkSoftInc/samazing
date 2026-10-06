import React from 'react';
import { useApp } from '../context/AppContext';
import { RECIPES } from '../data/recipes';
import { TRANSLATIONS } from '../data/translations';
import { X, Clock, Users, ExternalLink, Sparkles, ChefHat } from 'lucide-react';

export const RecipesHubModal: React.FC = () => {
  const {
    language,
    isRecipesModalOpen,
    setIsRecipesModalOpen,
    activeRecipeId,
    setActiveRecipeId,
  } = useApp();

  const t = TRANSLATIONS[language];

  if (!isRecipesModalOpen) return null;

  const selectedRecipe = RECIPES.find((r) => r.id === activeRecipeId);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#F6F4EE] rounded-3xl border border-[#E5E0D4] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 my-8 text-left">
        
        {/* Close Button */}
        <button
          onClick={() => {
            setIsRecipesModalOpen(false);
            setActiveRecipeId(null);
          }}
          className="absolute top-6 right-6 p-2 text-[#1E2421] bg-[#EAE5D9] hover:bg-[#DED7C7] rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {selectedRecipe ? (
          /* Single Recipe View */
          <div className="space-y-8">
            <button
              onClick={() => setActiveRecipeId(null)}
              className="text-xs font-semibold text-[#9E4A3B] underline hover:text-[#833B2E]"
            >
              ← Back to Recipe Hub
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5E0D4] bg-[#EAE5D9]">
                <img src={selectedRecipe.image} alt={selectedRecipe.title[language]} className="w-full h-full object-cover" />
              </div>

              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#9E4A3B]">
                  <ChefHat className="w-4 h-4" />
                  <span>SAMANTA'S PASTRY RECIPE</span>
                </div>

                <h2 className="text-3xl font-serif font-bold text-[#1E2421]">
                  {selectedRecipe.title[language]}
                </h2>

                <div className="flex items-center gap-4 text-xs font-medium text-[#5E6862] py-2 border-y border-[#E5E0D4]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[#9E4A3B]" />
                    <span>{selectedRecipe.prepTime}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-[#9E4A3B]" />
                    <span>{selectedRecipe.servings} Servings</span>
                  </span>
                  <span>·</span>
                  <span className="font-bold text-[#9E4A3B]">
                    {selectedRecipe.macros.protein} Protein / Serving
                  </span>
                </div>

                {/* Macros Breakdown */}
                <div className="grid grid-cols-4 gap-2 bg-[#EAE5D9]/50 p-3 rounded-xl border border-[#E5E0D4] text-center font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-[#828C86] block">CALORIES</span>
                    <span className="font-bold text-[#1E2421]">{selectedRecipe.macros.calories}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#828C86] block">PROTEIN</span>
                    <span className="font-bold text-[#9E4A3B]">{selectedRecipe.macros.protein}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#828C86] block">CARBS</span>
                    <span className="font-bold text-[#1E2421]">{selectedRecipe.macros.carbs}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#828C86] block">FAT</span>
                    <span className="font-bold text-[#1E2421]">{selectedRecipe.macros.fat}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ingredients & Steps */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-[#E5E0D4]">
              {/* Ingredients List */}
              <div className="md:col-span-5 bg-[#EAE5D9]/40 p-6 rounded-2xl border border-[#E5E0D4] space-y-4">
                <h3 className="font-serif font-bold text-lg text-[#1E2421]">Ingredients & Grams</h3>
                <ul className="space-y-2 text-xs divide-y divide-[#E5E0D4]">
                  {selectedRecipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="pt-2 flex justify-between font-medium text-[#2D3A34]">
                      <span>{ing.item[language]}</span>
                      <span className="font-mono font-bold text-[#9E4A3B]">{ing.grams}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step-by-Step Instructions */}
              <div className="md:col-span-7 space-y-4">
                <h3 className="font-serif font-bold text-lg text-[#1E2421]">Preparation Steps</h3>
                <ol className="space-y-3">
                  {selectedRecipe.steps.map((step, idx) => (
                    <li key={idx} className="p-4 bg-white rounded-xl border border-[#E5E0D4] text-xs leading-relaxed text-[#4A544F]">
                      <strong className="font-mono text-[#9E4A3B] mr-2">Step {idx + 1}:</strong>
                      {step[language]}
                    </li>
                  ))}
                </ol>

                {selectedRecipe.reelUrl && (
                  <a
                    href={selectedRecipe.reelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#9E4A3B] hover:underline pt-2"
                  >
                    <span>Watch matching @samazingnutrition Instagram Reel</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Recipe Hub Grid View */
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#9E4A3B]">
                <Sparkles className="w-4 h-4" />
                <span>RECIPE HUB</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#1E2421]">
                S'AMAZING Culinary Inspirations
              </h2>
              <p className="text-sm text-[#5E6862]">
                Explore gourmet high-protein recipes crafted by founder & food scientist Samanta.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {RECIPES.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => setActiveRecipeId(recipe.id)}
                  className="bg-[#EAE5D9]/40 hover:bg-white rounded-2xl border border-[#E5E0D4] overflow-hidden cursor-pointer transition-all p-4 space-y-3 hover:shadow-lg"
                >
                  <img src={recipe.image} alt={recipe.title[language]} className="w-full h-40 object-cover rounded-xl bg-[#EAE5D9]" />
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#1E2421]">{recipe.title[language]}</h4>
                    <p className="text-xs text-[#9E4A3B] font-semibold mt-1">{recipe.macros.protein} Protein · {recipe.prepTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
