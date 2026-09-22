export const trackAddToCart = (product) => {
  if (window.gtag) {
    window.gtag("event", "add_to_cart", {
      currency: "INR",
      value: product.price,
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price,
          quantity: product.quantity || 1,
        },
      ],
    });
  }
};

export const trackWishlist = (product) => {
  if (window.gtag) {
    window.gtag("event", "add_to_wishlist", {
      currency: "INR",
      value: product.price,
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price,
        },
      ],
    });
  }
};

export const trackViewItem = (product) => {
  if (window.gtag) {
    window.gtag("event", "view_item", {
      currency: "INR",
      value: product.price,
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price,
        },
      ],
    });
  }
};

export const trackBeginCheckout = (value, items = []) => {
  if (window.gtag) {
    window.gtag("event", "begin_checkout", {
      currency: "INR",
      value,
      items: items.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        item_category: item.category,
        price: item.price,
        quantity: item.quantity,
      })),
    });
  }
};

export const trackPurchase = (
  value,
  items = []
) => {
  if (window.gtag) {

    const transactionId =
      "ORDER_" + Date.now();

    window.gtag("event", "purchase", {
      transaction_id: transactionId,
      currency: "INR",
      value,
      items: items.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        item_category:
          item.category || "Product",
        price: item.price,
        quantity: item.quantity,
      })),
    });

    console.log(
      "Purchase Event Sent:",
      transactionId
    );
  }
};

export const trackSearch = (searchTerm) => {
  if (window.gtag) {
    window.gtag("event", "search", {
      search_term: searchTerm,
    });
  }
};

export const trackCategoryFilter = (category) => {
  if (window.gtag) {
    window.gtag("event", "select_item", {
      item_category: category,
    });
  }
};

export const trackViewCart = (
  totalPrice,
  items = []
) => {
  if (window.gtag) {
    window.gtag("event", "view_cart", {
      currency: "INR",
      value: totalPrice,
      items: items.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        item_category: item.category,
        price: item.price,
        quantity: item.quantity,
      })),
    });
  }
};

export const trackRemoveFromCart = (product) => {
  if (window.gtag) {
    window.gtag("event", "remove_from_cart", {
      currency: "INR",
      value: product.price,
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price,
          quantity: product.quantity || 1,
        },
      ],
    });
  }
};

export const trackViewItemList = (products) => {
  if (window.gtag) {
    window.gtag("event", "view_item_list", {
      item_list_name: "Shop Products",
      items: products.map((product) => ({
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        price: product.price,
      })),
    });
  }
};