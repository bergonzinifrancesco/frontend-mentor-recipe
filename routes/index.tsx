export default function Home() {
  return (
    <div role="region" class="bg-white rounded-xl desktop:w-[620px] mobile:w-[320px] p-6 flex flex-col gap-4">
      <img src="/image-omelette.jpeg" alt="Omelette" class="w-full rounded-lg" />
      <h1 class="font-serif text-2xl">Simple Omelette Recipe</h1>
      <p class="font-sans text-stone-600 text-sm">
        An easy and quick dish, perfect for any meal.
        The classic omelette combines beaten eggs cooked to perfection,
        optionally filled with your choice of cheese, vegetables, or meats.
      </p>
      <section class="flex flex-col bg-violet-50 w-full h-fit p-6 rounded-md gap-2">
        <h3 class="text-rose-800 font-sans font-semibold text-lg"> Preparation time</h3>
        <ul class="list-disc list-outside gap-2 flex flex-col mx-4">
          <ComplexLineItem header="Total" content="Approximately 10 minutes" />
          <ComplexLineItem header="Preparation" content="5 minutes" />
          <ComplexLineItem header="Cooking" content="5 minutes" />
        </ul>
      </section>
      <section class="flex flex-col w-full h-fit gap-2">
        <h2 class="text-brown-800 font-serif tracking-wide text-xl">Ingredients</h2>
        <ul class="list-disc list-outside gap-2 flex flex-col pl-2 mx-4">
          <SimpleLineItem content="2-3 large eggs"/>
          <SimpleLineItem content="Salt, to taste"/>
          <SimpleLineItem content="Pepper, to taste"/>
          <SimpleLineItem content="1 tablespoon of butter or oil"/>
          <SimpleLineItem content="Optional fillings: cheese, diced vegetables, cooked meats, herbs"/>
        </ul>
      </section>
      <hr class="my-2" />
      <section class="flex flex-col w-full h-fit gap-2">
        <h2 class="text-brown-800 font-serif tracking-wide text-xl">Instructions</h2>
        <ol class="list-decimal list-outside gap-2 flex flex-col pl-2 mx-4">
          <ComplexLineItem header="Beat the eggs" content="In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."/>
          <ComplexLineItem header="Heat the pan" content="Place a non-stick frying pan over medium heat and add butter or oil." />
          <ComplexLineItem header="Cook the omelette" content="Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface." />
          <ComplexLineItem header="Add fillings (optional)" content="When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."/>
          <ComplexLineItem header="Fold and serve" content="As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate." />
          <ComplexLineItem header="Enjoy" content="Serve hot, with additional salt and pepper if needed." />
        </ol>
      </section>
      <hr class="my-2" />
      <section class="flex flex-col w-full h-fit gap-2">
        <h2 class="text-brown-800 font-serif tracking-wide text-xl">Nutrition</h2>
        <p class="font-sans text-stone-600 text-sm">The table below shows nutritional values per serving without the additional fillings.</p>
        <table class="table-fixed items-center">
          <thead>
            <tr>
              <th class="w-1/2"/>
              <th class="w-1/2"/>
            </tr>
          </thead>
          <tbody>
            <TableItem header="Calories" content="277kcal" />
            <TableItem header="Carbs" content="0g" />
            <TableItem header="Protein" content="20g" />
            <TableItem noBorder header="Fat" content="22g" />
          </tbody>
        </table>
      </section>
    </div>
  );
}

type TableItemProps = {
  header: string
  content: string,
  noBorder?: boolean
}

function TableItem(props: TableItemProps) {
  return (
    <tr class={props.noBorder ? "" : "border-b-[1px]"}>
      <td class="text-stone-600 text-sm px-6 py-2">{props.header}</td>
      <td class="text-brown-800 text-sm font-semibold">{props.content}</td>
    </tr>
  )
}
type ComplexLineItemProps = {
  content: string
  header: string
};

function ComplexLineItem(props: ComplexLineItemProps) {
  return (
    <li class="pl-2">
      <span class="text-brown-900 font-semibold text-sm">{props.header}</span>
      <span class="font-light text-sm text-stone-600"> : {props.content}</span>
    </li>
  )
}

type SimpleLineItemProps = {
  content: string
}

function SimpleLineItem(props: SimpleLineItemProps) {
  return (
    <li class="font-light text-sm text-stone-600">{props.content}</li>
  )
}