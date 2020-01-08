class CreatePokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :pokemon_type
      t.string :height
      t.string :weight
      t.integer :level
      t.string :moves

      t.timestamps
    end
  end
end
