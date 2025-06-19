import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {MagnifyingGlassIcon, XMarkIcon} from 'react-native-heroicons/outline';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interface/fonts.enum';

interface SearchBarProps {
  placeholder: string;
  onSearch?: (text: string) => void;
  value?: string;
  onChangeText?: (text: string) => void;
  debounceDelay?: number;
}

const SearchBar = ({
  placeholder,
  onSearch,
  value: controlledValue,
  onChangeText,
  debounceDelay = 500,
}: SearchBarProps) => {
  const [internalValue, setInternalValue] = useState('');

  const isControlled = controlledValue !== undefined;
  const inputValue = isControlled ? controlledValue : internalValue;

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch?.(inputValue);
    }, debounceDelay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, debounceDelay, onSearch]);

  const handleChangeText = (text: string) => {
    if (!isControlled) {
      setInternalValue(text);
    }
    onChangeText?.(text);
  };

  const handleClear = () => {
    const newValue = '';
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChangeText?.(newValue);
    onSearch?.(newValue);
  };

  return (
    <View style={styles.searchInputContainer}>
      <TextInput
        style={styles.searchInput}
        placeholderTextColor={COLORS.text}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={handleChangeText}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="search"
      />
      {inputValue.length > 0 && (
        <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
          <XMarkIcon width={20} height={20} color={COLORS.text} />
        </TouchableOpacity>
      )}
      <MagnifyingGlassIcon
        width={25}
        height={20}
        color={'#092256'}
        style={styles.searchIcon}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightBackground,
    borderRadius: 8,
    height: 44,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginVertical: 10,
  },
  searchInput: {
    color: COLORS.text,
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.Light,
  },
  clearButton: {
    marginRight: 8,
    padding: 2,
  },
  searchIcon: {
    marginLeft: 10,
  },
});
