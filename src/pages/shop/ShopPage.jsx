import React from 'react'

import SHOP_DATA from './shopData'

import CollectionPreview from '../../components/collection-preview/CollectionPreview'

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA
  }

  render() {
    return (
      <div className="shop-page">
        {
          this.state.collections.map(({ id, ...collectionProps }) => (
            <CollectionPreview key={id} {...collectionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage
