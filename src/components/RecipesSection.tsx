import React from 'react';
import { useApp } from '../context/AppContext';
import { RECIPES } from '../data/recipes';
import { TRANSLATIONS } from '../data/translations';
import { Clock, Users, ArrowUpRight } from 'lucide-react';

export const RecipesSection: React.FC = () => {
  const { language, setIsRecipesModalOpen, setActiveRecipeId } = useApp();
  const t = TRANSLATIONS[language];

  const featuredRecipes = RECIPES.slice(0, 3);

  return (
    <section id="recipes" className="bg-[#F6F4EE] py-20 border-b border-[#E5E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#9E4A3B]">
              <span>CULINARY CREATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E2421]">
              {t.recipesSection.title}
            </h2>
            <p className="text-sm sm:text-base text-[#5E6862]">
              {t.recipesSection.subtitle}
            </p>
          </div>

          <button
            onClick={() => {
              setActiveRecipeId(null);
              setIsRecipesModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#2D3A34] text-[#F6F4EE] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#1E2421] transition-colors shrink-0 shadow-xs"
          >
            <span>{t.recipesSection.viewAll}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Recipe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => {
                setActiveRecipeId(recipe.id);
                setIsRecipesModalOpen(true);
              }}
              className="group bg-[#EAE5D9]/40 hover:bg-white rounded-2xl border border-[#E5E0D4] hover:border-[#9E4A3B]/40 transition-all duration-300 overflow-hidden cursor-pointer shadow-xs hover:shadow-xl flex flex-col justify-between"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#EAE5D9] relative">
                <img
                  src={recipe.image}
                  alt={recipe.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#9E4A3B]">
                  {recipe.macros.protein} Protein
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#1E2421] group-hover:text-[#9E4A3B] transition-colors">
                    {recipe.title[language]}
                  </h3>
                  
                  {/* Unboxed metadata */}
                  <div className="flex items-center gap-3 text-xs text-[#5E6862] mt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#9E4A3B]" />
                      <span>{recipe.prepTime}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#9E4A3B]" />
                      <span>{recipe.servings} Servings</span>
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E5E0D4] flex items-center justify-between text-xs font-semibold text-[#2D3A34] group-hover:text-[#9E4A3B]">
                  <span>View Recipe & Macros</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
