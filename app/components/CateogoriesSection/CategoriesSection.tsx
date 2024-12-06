import React from 'react'
import { Heading } from '../Heading';
import CategoryDisplay from './components/CategoryDisplay';

function CateogoriesSection() {
  return (
    <div className="categories-section w-full flex flex-col pt-[7rem]">
      <Heading title="Categories" />
			<CategoryDisplay />
    </div>
  )
}

export default CateogoriesSection;