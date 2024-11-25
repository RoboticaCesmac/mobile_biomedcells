import { StyleSheet } from 'react-native';

const loading_styles = StyleSheet.create({

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
      },
      loadingText: {
        fontSize: 16,
        color: '#333',
        marginTop: 10,
      },
      errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f7f7f7',
      },
      errorText: {
        fontSize: 16,
        color: '#ff0000',
        textAlign: 'center',
        marginBottom: 20,
      },
      retryButton: {
        backgroundColor: '#0066cc',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
      },
      retryButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },


});

export default loading_styles;