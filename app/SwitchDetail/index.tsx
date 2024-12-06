import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useColorScheme } from "../../utils/useColorScheme";

interface Switch {
    name: string;
    product: string;
    type: string;
    actuationForce: number;
    totalTravel: number;
    actuationPoint: number;
    durability: string;
    price: number;
    image?: string;
}

interface SwitchDetailProps {
    data: Switch;
}

function SpecRow({ label, value }: { label: string; value: string }) {
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}:</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}

export function SwitchDetail({ data }: SwitchDetailProps) {
    const colorScheme = useColorScheme();
    const backgroundColor = colorScheme === 'dark' ? '#1c1c1c' : '#ffffff';
    const textColor = colorScheme === 'dark' ? '#ffffff' : '#000000';

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.header}>
                <Text style={[styles.brand, { color: textColor }]}>{data.name}</Text>
                <Text style={[styles.product, { color: textColor }]}>{data.product}</Text>
            </View>

            <View style={styles.specs}>
                <SpecRow label="Type" value={data.type} />
                <SpecRow label="Actuation Force" value={`${data.actuationForce}g`} />
                <SpecRow label="Total Travel" value={`${data.totalTravel}mm`} />
                <SpecRow label="Actuation Point" value={`${data.actuationPoint}mm`} />
                <SpecRow label="Durability" value={data.durability} />
                <SpecRow label="Price" value={`$${data.price}`} />
            </View>

            {data.image && (
                <View style={styles.imageContainer}>
                    <Image 
                        source={require('../../assets/images/' + data.image)}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 8,
        margin: 8,
    },
    header: {
        marginBottom: 16,
    },
    brand: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    product: {
        fontSize: 18,
        marginTop: 4,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    label: {
        fontWeight: '500',
    },
    value: {
        marginLeft: 16,
    },
    imageContainer: {
        height: 120,
        marginTop: 16,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});