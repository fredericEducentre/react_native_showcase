import { useEffect, useState } from "react";
import { Button, FlatList, Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";

// Styles
const styles = StyleSheet.create({
    ProductContainer: {
        flex: 1,
        backgroundColor: 'rgba(231, 198, 127, 0.1)',
    },
    ProductCard: {
        backgroundColor: 'white',
        padding: 20,
        margin: 8,
        borderRadius: 10,
        flex: 1,
    },
    ProductCardImage: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginVertical: 10,
    }
});


export default function Index() {
    // Product Interface
    interface Product {
        id: number;
        title: string;
        price: number;
        category: string;
        description: string;
        image: string;
        rating: {
            rate: number;
            count: number;
        };
    }

    // State
    const [Products, setProduct] = useState<Product[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // Functions
    const handlePress = (product: Product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedProduct(null);
    };

    // Components
    const ProductCard = ({ product }: { product: Product }) => {
        return (
            <View style={styles.ProductCard} onTouchEnd={() => handlePress(product)}>
                <Text>{product.title}</Text>
                <Image source={{ uri: product.image }} style={styles.ProductCardImage} />
                <Text style={{ textAlign: "center" }}>{product.price + "$"}</Text>
            </View>
        );
    }

    // Fetch Products
    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=10")
            .then((response) => response.json())
            .then((data) => {
                // Set Products
                setProduct(data);
                // console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {/* Product List */}
            <FlatList
                style={styles.ProductContainer}
                data={Products}
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
            {/* Product Modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                {/* Modal Content */}
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, width: '80%' }}>
                        <Text style={{ textAlign: "center" }}>{selectedProduct?.title}</Text>
                        <Image source={{ uri: selectedProduct?.image }} style={styles.ProductCardImage} />
                        <Text>{selectedProduct?.description}</Text>
                        <Text>{"Rating : " + selectedProduct?.rating.rate + "/5"}</Text>
                        <Button title="Buy" onPress={() => alert("Product Bought!")} color="rgb(4, 175, 32)" />
                        <Button title="close" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}
