import React from 'react';
import { useParams } from 'react-router-dom';

interface DayMeal {
  breakfast: string;
  snack1: string;
  lunch: string;
  snack2: string;
  dinner: string;
}

interface DietPlanType {
  [key: string]: {
    title: string;
    days: DayMeal[];
  };
}

const dietPlans: DietPlanType = {
  'weight-loss': {
    title: 'Weight Loss Diet Plan',
    days: Array(7).fill(null).map((_, i) => ({
      breakfast: i === 0 ? 'Greek yogurt (150g) with 1 tbsp chia seeds, 1/2 cup mixed berries, and 1 tbsp almond butter (283 calories)' :
               i === 1 ? 'Oatmeal (1/2 cup) with 1/2 banana, 1 tbsp flaxseeds, and 1/4 cup walnuts(427 calories)' :
               i === 2 ? 'Smoothie with 1 scoop protein powder, 1/2 banana, 1 cup spinach, and 1 tbsp chia seeds(237 calories)' :
               i === 3 ? 'Avocado toast (1 slice whole-grain bread, 1/4 avocado, 1 egg) (210 calories)' :
               i === 4 ? 'Chia pudding made with 1/4 cup chia seeds, 1 cup almond milk, topped with a handful of raspberries. Prepare the night before for a thicker texture(285 calories)' :
               i === 5 ? 'Smoothie bowl with 1/2 cup Greek yogurt, 1/2 banana, handful of spinach, and 1 tbsp pumpkin seeds(167 calories)' :
               'Scrambled eggs (2 eggs) with spinach, 1 slice whole-grain toast, and 1/4 avocado (290 calories)',
      snack1: i === 0 ? 'One apple and 10 almonds(165 calories)' :
              i === 1 ? 'Carrot sticks (1 cup) with 2 tbsp hummus(110 calories)' :
              i === 2 ? '1 orange(62 calories)' :
              i === 3 ? '1/4 cup raw almonds(200 calories)' :
              i === 4 ? '1 small pear and 10 walnuts(170 calories)' :
              i === 5 ? '1 orange(62 calories)' :
              '1 apple with 1 tbsp almond butter(193 calories)',
      lunch: i === 0 ? 'Grilled chicken salad (100g chicken breast, mixed greens, cherry tomatoes, cucumber, 1 tbsp olive oil, and balsamic vinegar)(323 calories)' :
             i === 1 ? 'Lentil soup (1 cup) with spinach and mixed vegetables, plus 1 whole-grain roll(290 calories)' :
             i === 2 ? 'Quinoa salad (1/2 cup quinoa) with chickpeas (1/2 cup), cucumber, cherry tomatoes, and lemon-tahini dressing(334 calories)' :
             i === 3 ? 'Turkey wrap (whole-wheat tortilla, 50g turkey breast, lettuce, and mustard) with side salad(208 calories)' :
             i === 4 ? 'Grilled vegetable wrap (whole-wheat tortilla, grilled zucchini, bell peppers, mushrooms, spinach, and 1 tbsp hummus)(185 calories)' :
             i === 5 ? 'Chickpea salad (1/2 cup chickpeas, cucumber, cherry tomatoes, red onion, lemon-tahini dressing)(233 calories)' :
             'Quinoa bowl (1/2 cup quinoa) with black beans (1/2 cup), mixed greens, and salsa(245 calories)',
      snack2: i === 0 ? '1 boiled egg(70 calories)' :
              i === 1 ? 'Cottage cheese (1/2 cup) with a few cucumber slices(104 calories)' :
              i === 2 ? 'Handful of mixed berries(35 calories)' :
              i === 3 ? 'Sliced bell peppers with 1 tbsp guacamole(37 calories)' :
              i === 4 ? '1 boiled egg(70 calories)' :
              i === 5 ? 'Cottage cheese (1/2 cup) with a few cherry tomatoes(110 calories)' :
              'Carrot sticks (1 cup) with 2 tbsp hummus(110 calories)',
      dinner: i === 0 ? 'Baked salmon (100g) with steamed broccoli (1 cup) and sweet potato (1/2 cup)(351 calories)' :
              i === 1 ? 'Stir-fried tofu (100g) with bell peppers, zucchini, and a side of cauliflower rice(141 calories)' :
              i === 2 ? 'Grilled chicken breast (100g) with steamed green beans and a side of mashed cauliflower(225 calories)' :
              i === 3 ? 'Shrimp stir-fry (100g shrimp, broccoli, snap peas, carrots) with cauliflower rice(174 calories)' :
              i === 4 ? 'Baked cod (100g) with a side of steamed asparagus and 1/2 cup roasted sweet potatoes(207 calories)' :
              i === 5 ? 'Grilled turkey breast (100g) with a side of steamed green beans and mashed cauliflower(195 calories)' :
              'Grilled shrimp (100g) with a side of mixed roasted vegetables (bell peppers, zucchini, and asparagus)(150 calories)'
    }))
  },
  'muscle-gain': {
    title: 'Muscle Gain Diet Plan',
    days: Array(7).fill(null).map((_, i) => ({
      breakfast: i === 0 ? '3 scrambled eggs, 1 slice whole-grain toast, 1 avocado(530 calories)' :
               i === 1 ? 'Overnight oats (1/2 cup oats, 1 scoop protein powder, almond milk, chia seeds)(345 calories)' :
               i === 2 ? 'Smoothie (1 banana, 1 cup spinach, 1 tbsp almond butter, 1 scoop protein powder)(327 calories)' :
               i === 3 ? 'Greek yogurt (1 cup) with mixed berries and granola(265 calories)' :
               i === 4 ? 'Omelet (3 eggs, spinach, mushrooms, cheese)(300 calories)' :
               i === 5 ? 'Oatmeal with peanut butter and banana(350 calories)' :
               'Smoothie (1 cup spinach, 1 banana, 1 tbsp flaxseeds, 1 scoop protein powder)(269 calories)',
      snack1: i === 0 ? 'Protein shake (1 scoop protein powder, 1 banana, 1 tbsp peanut butter)(320 calories)' :
              i === 1 ? 'Cottage cheese (1 cup) with pineapple(240 calories)' :
              i === 2 ? 'Hard-boiled eggs (2)(140 calories)' :
              i === 3 ? 'Hummus with carrot and cucumber sticks(90 calories)' :
              i === 4 ? 'Protein shake (1 scoop protein powder, 1 cup almond milk)(150 calories)' :
              i === 5 ? 'Cottage cheese (1 cup) with sliced peaches(230 calories)' :
              'Hard-boiled eggs (2)(140 calories)',
      lunch: i === 0 ? 'Grilled chicken breast (150g), 1 cup brown rice, mixed vegetables(540 calories)' :
             i === 1 ? 'Chicken stir-fry (150g chicken, bell peppers, and broccoli) with 1 cup brown rice(540 calories)' :
             i === 2 ? 'Quinoa salad with chickpeas, cucumber, cherry tomatoes, and olive oil dressing(300 calories)' :
             i === 3 ? 'Tuna salad with mixed greens and whole-grain crackers(300 calories)' :
             i === 4 ? 'Chicken and vegetable stir-fry with brown rice(540 calories)' :
             i === 5 ? 'Chicken Caesar salad (grilled chicken, romaine lettuce, parmesan cheese, dressing)(375 calories)' :
             'Chicken wrap (whole wheat tortilla, grilled chicken, lettuce, tomatoes, avocado)(395 calories)',
      snack2: i === 0 ? 'Greek yogurt (1 cup) with honey and berries(229 calories)' :
              i === 1 ? 'Handful of almonds (1 oz)(160 calories)' :
              i === 2 ? 'Protein bar(200 calories)' :
              i === 3 ? 'Sliced apple with almond butter(190 calories)' :
              i === 4 ? 'Greek yogurt with honey and walnuts(244 calories)' :
              i === 5 ? 'Trail mix (nuts and dried fruits)(150 calories)' :
              'Greek yogurt with mixed berries(200 calories)',
      dinner: i === 0 ? 'Baked salmon (150g), 1 cup quinoa, steamed broccoli(585 calories)' :
              i === 1 ? 'Grilled tilapia (150g) with sweet potato mash (1 medium) and green beans(280 calories)' :
              i === 2 ? 'Roast chicken (150g) with brown rice and asparagus(520 calories)' :
              i === 3 ? 'Grilled chicken thighs (150g) with quinoa and steamed vegetables(460 calories)' :
              i === 4 ? 'Baked cod (150g) with roasted sweet potatoes and green beans(255 calories)' :
              i === 5 ? 'Grilled salmon (150g) with quinoa and steamed broccoli(475 calories)' :
              'Baked tilapia (150g) with roasted vegetables and quinoa(425 calories)'
    }))
  },
  'balance-diet': {
    title: 'Balanced Diet Plan',
    days: Array(7).fill(null).map((_, i) => ({
      breakfast: i === 0 ? 'Oatmeal (1/2 cup) with 1 tbsp honey, 1/4 cup walnuts, and a banana (350 calories)' :
               i === 1 ? 'Greek yogurt with honey and mixed fruits (250 calories)' :
               i === 2 ? 'Smoothie (1 banana, spinach, protein powder, almond milk) (300 calories)' :
               i === 3 ? 'Whole grain toast with avocado and poached egg (400 calories)' :
               i === 4 ? 'Chia pudding (1/4 cup chia seeds, almond milk, honey) (280 calories)' :
               i === 5 ? 'Smoothie bowl with fruits, nuts, and seeds (450 calories)' :
               'Overnight oats (1/2 cup oats, almond milk, berries) (300 calories)',
      snack1: i === 0 ? 'Carrot sticks with hummus (2 tbsp) (100 calories)' :
              i === 1 ? 'Rice cakes with peanut butter (150 calories)' :
              i === 2 ? 'Celery sticks with cream cheese (120 calories)' :
              i === 3 ? 'Berries (1 cup) (70 calories)' :
              i === 4 ? 'Sliced cucumber with tzatziki (80 calories)' :
              i === 5 ? 'Rice cakes with almond butter (150 calories)' :
              'Hard-boiled eggs (2) (140 calories)',
      lunch: i === 0 ? 'Quinoa salad with mixed greens, chickpeas, and vinaigrette (450 calories)' :
             i === 1 ? 'Turkey wrap (whole grain tortilla, turkey, lettuce, tomato) (350 calories)' :
             i === 2 ? 'Lentil soup with mixed vegetables and whole grain bread (400 calories)' :
             i === 3 ? 'Grilled chicken salad with mixed greens and vinaigrette (450 calories)' :
             i === 4 ? 'Vegetable stir-fry with tofu and brown rice (500 calories)' :
             i === 5 ? 'Tuna salad with mixed greens (300 calories)' :
             'Chicken Caesar salad (grilled chicken, romaine, dressing) (420 calories)',
      snack2: i === 0 ? 'Yogurt with honey and nuts (200 calories)' :
              i === 1 ? 'Apple slices with almond butter (200 calories)' :
              i === 2 ? 'Handful of almonds (1 oz) (160 calories)' :
              i === 3 ? 'Dark chocolate (1 oz) (170 calories)' :
              i === 4 ? 'Trail mix (nuts and dried fruits) (150 calories)' :
              i === 5 ? 'Cottage cheese with fruit (200 calories)' :
              'Sliced veggies with hummus (100 calories)',
      dinner: i === 0 ? 'Grilled chicken (150g), quinoa (1 cup), and steamed vegetables (550 calories)' :
              i === 1 ? 'Baked salmon (150g) with sweet potatoes and green beans (450 calories)' :
              i === 2 ? 'Stir-fried tofu (150g) with brown rice and vegetables (500 calories)' :
              i === 3 ? 'Roasted chicken (150g) with roasted veggies (550 calories)' :
              i === 4 ? 'Pasta with marinara sauce and lean ground turkey (600 calories)' :
              i === 5 ? 'Beef stir-fry with mixed vegetables (500 calories)' :
              'Vegetable curry with chickpeas and brown rice (450 calories)'
    }))
  },
  'keto': {
  title: 'Keto Diet Plan',
  days: Array(7).fill(null).map((_, i) => ({
    breakfast: i === 0 ? 'Egg and spinach scramble with avocado (400 calories)' :
                 i === 1 ? 'Chia pudding made with coconut milk (250 calories)' :
                 i === 2 ? 'Greek yogurt (full fat) with walnuts and berries (300 calories)' :
                 i === 3 ? 'Omelet with cheese and mushrooms (350 calories)' :
                 i === 4 ? 'Smoothie with spinach, avocado, and protein powder (300 calories)' :
                 i === 5 ? 'Egg muffins with bacon and cheese (450 calories)' :
                 'Scrambled eggs with cream cheese and herbs (350 calories)',
    snack1: i === 0 ? 'Olives (1/2 cup) (120 calories)' :
            i === 1 ? 'Almonds (1 oz) (160 calories)' :
            i === 2 ? 'Celery sticks with cream cheese (100 calories)' :
            i === 3 ? 'Pepperoni slices (200 calories)' :
            i === 4 ? 'Sliced cucumber with ranch dip (150 calories)' :
            i === 5 ? 'Cheese slices (1 oz) (110 calories)' :
            'Pork rinds (150 calories)',
    lunch: i === 0 ? 'Grilled chicken salad with olive oil dressing (500 calories)' :
           i === 1 ? 'Zucchini noodles with pesto and grilled shrimp (400 calories)' :
           i === 2 ? 'Lettuce wraps with turkey and avocado (350 calories)' :
           i === 3 ? 'Cauliflower rice stir-fry with eggs (300 calories)' :
           i === 4 ? 'Chicken and broccoli casserole (450 calories)' :
           i === 5 ? 'Egg salad in lettuce wraps (300 calories)' :
           'Tuna salad with mayo and pickles (350 calories)',
    snack2: i === 0 ? 'Hard-boiled eggs (2) (140 calories)' :
            i === 1 ? 'String cheese (80 calories)' :
            i === 2 ? 'Mixed nuts (1 oz) (200 calories)' :
            i === 3 ? 'Sliced radishes with dip (50 calories)' :
            i === 4 ? 'Coconut chips (150 calories)' :
            i === 5 ? 'Avocado (240 calories)' :
            'Pork rinds (150 calories)',
    dinner: i === 0 ? 'Salmon with asparagus cooked in butter (600 calories)' :
            i === 1 ? 'Beef stir-fry with bell peppers (500 calories)' :
            i === 2 ? 'Grilled pork chops with sautéed spinach (550 calories)' :
            i === 3 ? 'Chicken thighs with creamy mushroom sauce (500 calories)' :
            i === 4 ? 'Shrimp scampi with zucchini noodles (450 calories)' :
            i === 5 ? 'Roast chicken with Brussels sprouts (400 calories)' :
            'Beef burger (no bun) with cheese and side salad (500 calories)'
  }))
},
'vegan': {
  title: 'Vegan Diet Plan',
  days: Array(7).fill(null).map((_, i) => ({
    breakfast: i === 0 ? 'Smoothie (banana, spinach, almond milk, flaxseed) (300 calories)' :
             i === 1 ? 'Chia pudding with almond milk and berries (250 calories)' :
             i === 2 ? 'Oatmeal with almond butter and banana (400 calories)' :
             i === 3 ? 'Tofu scramble with veggies (300 calories)' :
             i === 4 ? 'Avocado toast on whole grain bread (350 calories)' :
             i === 5 ? 'Granola with almond milk and fruits (400 calories)' :
             'Vegan protein pancakes with maple syrup (350 calories)',
    snack1: i === 0 ? 'Carrot sticks with hummus (150 calories)' :
            i === 1 ? 'Apple with almond butter (200 calories)' :
            i === 2 ? 'Rice cakes with avocado (180 calories)' :
            i === 3 ? 'Trail mix (nuts and dried fruits) (200 calories)' :
            i === 4 ? 'Cucumber slices with hummus (100 calories)' :
            i === 5 ? 'Coconut yogurt with granola (250 calories)' :
            'Banana with peanut butter (250 calories)',
    lunch: i === 0 ? 'Quinoa salad with black beans and corn (400 calories)' :
           i === 1 ? 'Chickpea salad with veggies (350 calories)' :
           i === 2 ? 'Lentil soup with bread (300 calories)' :
           i === 3 ? 'Vegan sushi with avocado and cucumber (350 calories)' :
           i === 4 ? 'Falafel wrap with tahini sauce (450 calories)' :
           i === 5 ? 'Stuffed peppers with rice and beans (400 calories)' :
           'Vegetable stir-fry with tofu and brown rice (450 calories)',
    snack2: i === 0 ? 'Popcorn with nutritional yeast (150 calories)' :
            i === 1 ? 'Edamame (120 calories)' :
            i === 2 ? 'Fruit salad (200 calories)' :
            i === 3 ? 'Vegan protein bar (200 calories)' :
            i === 4 ? 'Dried seaweed snacks (50 calories)' :
            i === 5 ? 'Baked sweet potato fries (200 calories)' :
            'Chickpeas roasted with spices (180 calories)',
    dinner: i === 0 ? 'Stir-fried tempeh with vegetables and brown rice (500 calories)' :
            i === 1 ? 'Pasta with marinara sauce and veggies (400 calories)' :
            i === 2 ? 'Vegan chili with beans (500 calories)' :
            i === 3 ? 'Cauliflower curry with chickpeas (450 calories)' :
            i === 4 ? 'Quinoa and black bean bowl (400 calories)' :
            i === 5 ? 'Grilled vegetable platter with tahini sauce (350 calories)' :
            'Lentil and vegetable stew (450 calories)'
  }))
},
'athletes-diet': {
  title: 'Athletes Diet Plan',
  days: Array(7).fill(null).map((_, i) => ({
    breakfast: i === 0 ? 'Egg white omelet with spinach and feta (250 calories)' :
             i === 1 ? 'Protein smoothie with banana and peanut butter (400 calories)' :
             i === 2 ? 'Oatmeal with protein powder, berries, and almonds (450 calories)' :
             i === 3 ? 'Quinoa porridge with nuts and seeds (400 calories)' :
             i === 4 ? 'Greek yogurt with honey and granola (350 calories)' :
             i === 5 ? 'Avocado toast with poached eggs (400 calories)' :
             'Scrambled eggs with spinach and whole-grain toast (350 calories)',
    snack1: i === 0 ? 'Cottage cheese with fruit (200 calories)' :
            i === 1 ? 'Protein bar (200 calories)' :
            i === 2 ? 'Handful of mixed nuts (200 calories)' :
            i === 3 ? 'Rice cakes with almond butter (150 calories)' :
            i === 4 ? 'Sliced apple with peanut butter (180 calories)' :
            i === 5 ? 'Hard-boiled eggs (2) (140 calories)' :
            'Trail mix (nuts and dried fruits) (250 calories)',
    lunch: i === 0 ? 'Grilled chicken breast with quinoa and vegetables (500 calories)' :
           i === 1 ? 'Tuna salad sandwich on whole grain bread (400 calories)' :
           i === 2 ? 'Turkey wrap with veggies (350 calories)' :
           i === 3 ? 'Salmon bowl with brown rice and greens (500 calories)' :
           i === 4 ? 'Chickpea and quinoa salad (400 calories)' :
           i === 5 ? 'Stir-fried tofu with vegetables and brown rice (450 calories)' :
           'Chicken and vegetable stir-fry with brown rice (500 calories)',
    snack2: i === 0 ? 'Greek yogurt with honey and berries (200 calories)' :
            i === 1 ? 'Sliced veggies with hummus (150 calories)' :
            i === 2 ? 'Protein shake (200 calories)' :
            i === 3 ? 'Dried fruits and nuts (250 calories)' :
            i === 4 ? 'String cheese (80 calories)' :
            i === 5 ? 'Rice cakes with peanut butter (150 calories)' :
            'Nut butter and banana on rice cakes (200 calories)',
    dinner: i === 0 ? 'Grilled steak with sweet potatoes and broccoli (600 calories)' :
            i === 1 ? 'Baked chicken thighs with quinoa and green beans (500 calories)' :
            i === 2 ? 'Pasta with lean ground turkey and marinara sauce (500 calories)' :
            i === 3 ? 'Grilled fish with a side of asparagus (400 calories)' :
            i === 4 ? 'Stuffed bell peppers with quinoa and black beans (400 calories)' :
            i === 5 ? 'Vegetable curry with chickpeas and brown rice (450 calories)' :
            'Baked salmon with wild rice and steamed broccoli (600 calories)'
  }))
},
};

export const DietPlan: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const plan = type ? dietPlans[type] : null;

  if (!plan) {
    return <div className="text-center">Diet plan not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{plan.title}</h1>
      <div className="space-y-8">
        {plan.days.map((day, index) => (
          <div key={index} className="bg-dark-surface rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Day {index + 1}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-blue-400">Breakfast</h3>
                <p>{day.breakfast}</p>
              </div>
              <div>
                <h3 className="font-medium text-blue-400">Morning Snack</h3>
                <p>{day.snack1}</p>
              </div>
              <div>
                <h3 className="font-medium text-blue-400">Lunch</h3>
                <p>{day.lunch}</p>
              </div>
              <div>
                <h3 className="font-medium text-blue-400">Afternoon Snack</h3>
                <p>{day.snack2}</p>
              </div>
              <div>
                <h3 className="font-medium text-blue-400">Dinner</h3>
                <p>{day.dinner}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietPlan;