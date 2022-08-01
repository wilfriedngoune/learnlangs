import Barres from './Barres.vue'

//Ce qui nous permettra de monter le composant pour le tester
import { mount } from '@vue/test-utils'


test('tester si le titre s affiche bien', () => {

    //On monte le composant en lui passant ses props
    const wrapper = mount(Barres, {
        propsData : {
            exerciseDone : 50,
            totalExercises : 100
        }
    })

    const title = wrapper.get('[data-test="title"]')

    //Verifie si le resultat est le resultat attendue.
    expect(title.text()).toBe("50 sur 100")

})



test('tester si le contenu de small bar s affiche bien', () => {

    //On monte le composant en lui passant ses props
    const wrapper = mount(Barres, {
        propsData : {
            exerciseDone : 50,
            totalExercises : 100
        }
    })

    expect((wrapper.get('[data-test="small-bar"]')).text()).toBe("50")



})

test('tester si la largeur de la div est correcte', () => {

    //On monte le composant en lui passant ses props
    const wrapper = mount(Barres, {
        propsData : {
            exerciseDone : 1,
            totalExercises : 3
        }
    })

    //Je recupere l'element small bar
    const smallBar = wrapper.get('[data-test="small-bar"]').element

    //Je verifie si sont WIDHT est correct
    expect(getComputedStyle(smallBar).getPropertyValue("width")).toBe("33.33333333333333%");

})