import React from "react";
import { View } from "native-base";
import { FlatList, Keyboard } from "react-native";

function FlatListBasic({
  state,
  horizontal,
  numColumns,
  data,
  refreshing,
  itemSeparator,
  initialNumToRender,
  onEndReachedThreshold,
  refreshHandler,
  loadMoreHandler,
  renderHeaderHandler,
  renderEmptyHandler,
  renderFooter,
  renderItemSeparatorHandler,
  renderItemHandler,
  onScrollKeyboardDismiss,
  ...props
}) {
  return (
    <FlatList
      extraData={state}
      horizontal={horizontal}
      numColumns={numColumns || 1}
      initialNumToRender={initialNumToRender}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      onScroll={() => (onScrollKeyboardDismiss ? Keyboard.dismiss() : {})}
      data={data}
      renderItem={renderItemHandler}
      keyExtractor={(item, index) => {
        if (item.id) return item.id.toString();
        else return index.toString();
      }}
      ListHeaderComponent={renderHeaderHandler}
      ListEmptyComponent={renderEmptyHandler}
      ListFooterComponent={renderFooter}
      ItemSeparatorComponent={
        renderItemSeparatorHandler
          ? renderItemSeparatorHandler
          : itemSeparator
          ? () => <View style={{ height: 20 }} />
          : null
      }
      refreshing={refreshing}
      onRefresh={refreshHandler}
      onEndReached={loadMoreHandler}
      onEndReachedThreshold={onEndReachedThreshold || 0.5}
      {...props}
    />
  );
}

export default FlatListBasic;
