import json
import nltk
import numpy as np
import pickle
import random
import tensorflow as tf
import tflearn
from nltk.stem.lancaster import LancasterStemmer
from nltk.stem import WordNetLemmatizer

stemmer = LancasterStemmer()
lemmatizer = WordNetLemmatizer()

def load_model():
    data = pickle.load(open('data/training_data', 'rb'))
    words = data['words']
    classes = data['classes']

    tf.compat.v1.reset_default_graph()

    net = tflearn.input_data(shape=[None, len(data['train_x'][0])])
    net = tflearn.fully_connected(net, 10)
    net = tflearn.fully_connected(net, 10)
    net = tflearn.fully_connected(net, len(data['train_y'][0]), activation='softmax')
    net = tflearn.regression(net)

    model = tflearn.DNN(net)
    model.load('tlmodel/model.tflearn')

    return model, words, classes

def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word.lower()) for word in sentence_words]
    return sentence_words

def bow(sentence, words, show_details=False):
    sentence_words = clean_up_sentence(sentence)
    bag = [0]*len(words)
    for s in sentence_words:
        for i, w in enumerate(words):
            if w == s:
                bag[i] = 1
                if show_details:
                    print('found in bag:', w)
    return np.array(bag)

def generate_response(user_input):
    model, words, classes = load_model()
    intents = json.load(open('data/intents.json', encoding='utf-8'))

    results = model.predict([bow(user_input, words)])[0]
    results = [[i, r] for i, r in enumerate(results) if r > 0.25]
    results.sort(key=lambda x: x[1], reverse=True)

    response_text = "Sorry, I didn't understand that. Please try again."

    if results:
        for r in results:
            for i in intents['intents']:
                if i['tag'] == classes[r[0]]:
                    response_text = random.choice(i['responses'])
                    break

    return response_text
