import React, { createContext, useContext, useState } from "react";
import Filter from "../components/Filter";
import { getTodayDate, getTomorrowDate } from "../utilities/functions"

const defaultFilterValues = {
    villaIdeas: [],
    experiences: [],
    location: 'South Sicily',
    checkIn: getTodayDate(),
    checkOut: getTomorrowDate(),
    adults: 2,
    childrens: 0,
    infants: 0,
    minPrice: 50,
    maxPrice: 500,
    bedrooms: 1
}

const FilterContext = createContext({})

export function useFilter() {
    return useContext(FilterContext)
}

export function FilterProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [filterValues, setFilterValues] = useState(defaultFilterValues)
    const [tempFilterValues, setTempFilterValues] = useState(defaultFilterValues)

    const openFilter = () => {
        setIsOpen(true)
    }

    const closeFilter = () => {
        setIsOpen(false)
        setTempFilterValues(filterValues)
    }

    const applyTempFilter = () => {
        setFilterValues(tempFilterValues)
        setIsOpen(false)
    }

    const cancelTempFilter = () => {
        setTempFilterValues(filterValues)
        setIsOpen(false)
    }

    const updateTempFilter = (newFilter) => {
        setTempFilterValues(newFilter)
    }

    const toggleVillaIdea = (value) => {
        const updatedFilter = { ...tempFilterValues }
        if (updatedFilter.villaIdeas.includes(value)) {
            updatedFilter.villaIdeas = updatedFilter.villaIdeas.filter(item => item !== value)
        } else {
            updatedFilter.villaIdeas.push(value)
        }
        updateTempFilter(updatedFilter)
    }

    const toggleExperience = (value) => {
        const updatedFilter = { ...tempFilterValues }
        updatedFilter.experiences = value
        updateTempFilter(updatedFilter)
    }

    const updateLocation = (value) => {
        const updatedFilter = { ...tempFilterValues }
        updatedFilter.location = value
        updateTempFilter(updatedFilter)
    }

    const updateCheckIn = (value) => {
        const updatedFilter = { ...tempFilterValues }
        updatedFilter.checkIn = value
        updateTempFilter(updatedFilter)
    }

    const updateCheckOut = (value) => {
        const updatedFilter = { ...tempFilterValues }
        updatedFilter.checkOut = value
        updateTempFilter(updatedFilter)
    }

    const updateAdults = (value) => {
        const updatedFilter = { ...tempFilterValues }
        updatedFilter.adults = value
        updateTempFilter(updatedFilter)
    }

    const updateChildrens = (value) => {
        const updatedFilter = { ...tempFilterValues }
        updatedFilter.childrens = value
        updateTempFilter(updatedFilter)
    }

    const updateInfants = (value) => {
        const updatedFilter = { ...tempFilterValues }
        updatedFilter.infants = value
        updateTempFilter(updatedFilter)
    }

    const updateMinPrice = (value) => {
        const updatedFilter = { ...tempFilterValues }
        updatedFilter.minPrice = value
        updateTempFilter(updatedFilter)
    }

    const updateMaxPrice = (value) => {
        const updatedFilter = { ...tempFilterValues }
        updatedFilter.maxPrice = value
        updateTempFilter(updatedFilter)
    }

    const updateBedrooms = (value) => {
        const updatedFilter = { ...tempFilterValues }
        updatedFilter.bedrooms = value
        updateTempFilter(updatedFilter)
    }

    const resetFilterValues = () => {
        setTempFilterValues(defaultFilterValues)
        setFilterValues(defaultFilterValues)
    }

    const applyFilter = () => {
        setFilterValues(tempFilterValues)
        setIsOpen(false)
    }

    return (
        <FilterContext.Provider
            value={{
                isOpen,
                openFilter,
                closeFilter,
                filterValues,
                toggleVillaIdea,
                toggleExperience,
                updateLocation,
                updateCheckIn,
                updateCheckOut,
                updateAdults,
                updateChildrens,
                updateInfants,
                updateMinPrice,
                updateMaxPrice,
                updateBedrooms,
                resetFilterValues,
                applyTempFilter,
                cancelTempFilter,
                updateTempFilter,
                applyFilter,
                tempFilterValues
            }}
        >
            {children}
            <Filter isOpen={isOpen} />
        </FilterContext.Provider>
    )
}
